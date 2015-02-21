function myEvents(){
    
    // display a list of events belonging to me in #list
    // e.g., https://api.github.com/users/doubleshow/events
    $.get("https://api.github.com/users/shatterspike1/events", github, function(data) {
        
        var event = data
        
        console.log(event[0])

        $.get("/git-jquery/templates/eventList.jade", function(template) {

            var html = jade.render(template, {items: event})
            
            $("#list").html(html)

        })

    })
}