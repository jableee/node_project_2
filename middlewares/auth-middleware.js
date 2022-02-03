const jwt = require("jsonwebtoken");
const User = require("../schemas/user");

module.exports = (req, res, next) => {
    console.log('미들웨어 시작')
    const { authorization } = req.headers;
    const [tokenType, tokenValue] = authorization.split(" ");

    if (tokenType !== 'Bearer') {
        res.status(401).send({
            errorMessage: '로그인후 사용하세요'
        })
        return;
    }

    try{
        console.log('try시작')
        const { userId } = jwt.verify(tokenValue, "my-secret-key");

        User.findById(userId).exec().then((user) => {
            res.locals.user = user;
            console.log('미들웨어 완료')
            next();
        })
    }catch (error){
        res.status(401).send({
            errorMessage: '로그인후 사용하세요'
        })
        return;
    }

}