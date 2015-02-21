function myRepo(full_name){

    // display a particular repo of mine in #details
    // e.g., https://api.github.com/repos/doubleshow/up

    $.get("https://api.github.com/repos/" + full_name, github, function(data) {
        
        var repo = data
        console.log(repo)

        $.get("/git-jquery/templates/repoView.jade", function(template) {

            var html = jade.render(template, {item: repo})
            
            $("#details").html(html)

        })

    })
}