slideItems();

addListener();

async function slideItems() {

    let items = $(".slide-items img");

    for (let index = 0; index < items.length; index++) {

        items.eq(index).animate({left: '100%'}, 5000);

        await delay(5000);

        if (index == items.length - 1) {

            items.css("left", "-600px");

            slideItems();

        }
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function addListener() {

    $(".navigation-link > a").hover(function() {

        let aTags = document.querySelectorAll(".navigation-link > a");

        aTags.forEach(tag => {
            
            if (tag.innerHTML == this.innerHTML) {
                
                tag.classList.toggle("highlight");
            }

        });
    })

}