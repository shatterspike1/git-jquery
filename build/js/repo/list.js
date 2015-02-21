// Q: How is this js file loaded?
// A: It's called by app.js when the Repo button is clicked.
function repoList(){

    console.log('listing repos')    
    
    $.get("https://api.github.com/orgs/ucdd2-sp15/repos", github, function(data) {

        // Q: What is the parameter 'github'? Where was it defined? What's the purpose? 
        // A: It is a set of data being sent to the server.  It is defined in github.js.  It's there to say who's asking for what.
        // Q: Why is JSON.parse no longer necessary?
        // A: A JSON file isn't being returned.
        var repos = data
        
        // Q. Why are these templates files stored in a separate folder inside contents/?
        $.get("/git-jquery/templates/repoList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: repos})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first repo to view
            repoView(repos[0].full_name)

        })

    })

}