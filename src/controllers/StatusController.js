const SessionService = require("../service/SessionService");

module.exports = {
    async create(request, response, next) {
        console.log("starting info session..." + request.query.sessionName);
        let session = await SessionService.getSession(request.query.sessionName);
    
        console.log('session', session);
    
        if (session != false) {
            response.status(200).json({ state: session.state });  
        } else {
            response.status(200).json({ result: "error", message: "NOTFOUND" });
        }
    }
};