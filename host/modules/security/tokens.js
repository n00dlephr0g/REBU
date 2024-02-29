const hash = require("./authentication")

function gen_token() {
    return output = hash.hash(Math.random().toString())
}


gen_token()