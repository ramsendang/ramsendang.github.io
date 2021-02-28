const header = document.querySelector("nav");
const banner = document.querySelector(".banner");
const posts = document.querySelectorAll(".post");

const bannerOptions = {

}

const bannerObserver = new IntersectionObserver(function(entries,bannerObserver){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            header.classList.add("background");
        }else{
            header.classList.remove("background")
        }
    })
},bannerOptions);

bannerObserver.observe(banner);

const postOptions ={
    // rootMargin: -20px 0px 0px 0px,
    threshold: 0.5
}

const postObserver = new IntersectionObserver(function(entities, postObserver){
    entities.forEach(entity=>{
        if(entity.isIntersecting){
            entity.target.classList.add('active');
        }else{
            entity.target.classList.remove('active');
            // postObserver.unobserve(entity.target);
        }
    })
}, postOptions)

posts.forEach(post=>{
    postObserver.observe(post);
})