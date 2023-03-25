#making server

    1. Create server
        const http = require("http")
        const server = http.createServer(function(request, response){
        })
    
    2. Give server a port
        server.listen(3000, function(){
            console.log("Server is running on port 3000")
        })

    3. Get server response
        response.write("Hello world! this is server")
    
    4. End response
        response.end()

##  methods
    1. request.method == "GET" to use only GET method


# Creating multiple paths
>Example path:-  **users/1**

    1. use request.url to get path after server name
>        "users/1"
    2. use request.url.split("/") to split path
>        ['','users','1']
    3. use if else condition to get value from path


## request properties
    1. header
    2. body
    3. method
    4. url

