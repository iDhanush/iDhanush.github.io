window.addEventListener('scroll', function () {
    var fixme = document.querySelector('.con-con');
    var fixmeTop = 115
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    console.log(currentScroll,fixme.scrollTop)
    if (currentScroll >= fixmeTop) {
        fixme.style.position = 'fixed';
        fixme.style.right = '0';
        fixme.style.top = "0"
        fixme.style.marginTop = "30px";
        fixme.style.padding
    } else {
        fixme.style.position = '';
        fixme.style.marginTop = "-50px";
    }
});
function scrollToElement(selector) {
    var element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
setTimeout(function () { scrollToElement("#home") }, 100)

svgList = {
    readmore: "data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIuMDAyIDIxLjUzNGM1LjUxOCAwIDkuOTk4LTQuNDggOS45OTgtOS45OThzLTQuNDgtOS45OTctOS45OTgtOS45OTdjLTUuNTE3IDAtOS45OTcgNC40NzktOS45OTcgOS45OTdzNC40OCA5Ljk5OCA5Ljk5NyA5Ljk5OHptMC0xLjVjLTQuNjkgMC04LjQ5Ny0zLjgwOC04LjQ5Ny04LjQ5OHMzLjgwNy04LjQ5NyA4LjQ5Ny04LjQ5NyA4LjQ5OCAzLjgwNyA4LjQ5OCA4LjQ5Ny0zLjgwOCA4LjQ5OC04LjQ5OCA4LjQ5OHptMC02LjVjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1di01LjVjMC0uNDE0LjMzNi0uNzUuNzUtLjc1cy43NS4zMzYuNzUuNzV2NS41YzAgLjQxNC0uMzM2Ljc1LS43NS43NXptLS4wMDIgM2MuNTUyIDAgMS0uNDQ4IDEtMXMtLjQ0OC0xLTEtMS0xIC40NDgtMSAxIC40NDggMSAxIDF6IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=",
}

var myWorks = [
    {
        title: "Placify App",
        content: "A mobile app designed to simplify college placements, providing personalized feeds, real-time job notifications, and updates to enhance the placement process for students.",
        source: "https://www.linkedin.com/posts/idhanush_placements-backenddeveloper-techforgood-activity-7277985605483905027-lKnB?utm_source=share&utm_medium=member_desktop"
    },
    {
        title: "IoT Animatronics Robot V1",
        content: "An IoT-enabled Animatronic Greeting Robot Funded by the IEDC of SJC Devagiri. The robot is designed to interact dynamically with users, creating an engaging experience by greeting, animating expressions, and allowing interaction through its body screen.",
        source: "https://github.com/iDhanush/IoT_Animatronics_Robot_V1.git"
    },
    {
        title: "LinkTools.in",
        content: "LinkTools: A versatile web application that simplifies URL management with features like link shortening, custom aliases, QR code generation, and analytics to track link performance. Perfect for personal and business use!",
        source: "https://linktools.pages.dev/"
    },
    {
        title: "ReScrApi",
        content: "Lorem Ipsum is simply and scrambled it unchanged. in the 1960s with the release of Lorem Ipsum passages, and more recently with desktop publis",
        source: "https://google.com"
    }
]

function createDiv(className) {
    var div = document.createElement("div")
    div.className = className
    return div
}
function createImg(src, className) {
    var img = document.createElement("img")
    img.src = src
    img.className = className
    
    return img
}
var cards = document.querySelector(".cards")
const timer = ms => new Promise(res => setTimeout(res, ms))

async function test () {
    for (i = 0; i < myWorks.length; i++) {
        var card = createDiv("card")
        var contents = createDiv("contents")
        var title = createDiv("title")
        var readmore = createDiv("readmore")
        var content = createDiv("content")

        readmore.setAttribute("onclick", `window.open('${myWorks[i]['source']}')`)
        var readMoreImg = createImg(svgList["readmore"], "readmoreimg")
        readmore.appendChild(readMoreImg)
        title.innerHTML = myWorks[i]['title']
        title.appendChild(readmore)
        content.innerHTML = myWorks[i]["content"]
        contents.appendChild(title)
        contents.appendChild(content)
        card.appendChild(contents)
        cards.appendChild(card);
        // await timer(500)
    }
}
test()

/* <div class="card">

<div class="contents">
    <div class="title">
        News REST API <span class="readmore">
            <img
                src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIuMDAyIDIxLjUzNGM1LjUxOCAwIDkuOTk4LTQuNDggOS45OTgtOS45OThzLTQuNDgtOS45OTctOS45OTgtOS45OTdjLTUuNTE3IDAtOS45OTcgNC40NzktOS45OTcgOS45OTdzNC40OCA5Ljk5OCA5Ljk5NyA5Ljk5OHptMC0xLjVjLTQuNjkgMC04LjQ5Ny0zLjgwOC04LjQ5Ny04LjQ5OHMzLjgwNy04LjQ5NyA4LjQ5Ny04LjQ5NyA4LjQ5OCAzLjgwNyA4LjQ5OCA4LjQ5Ny0zLjgwOCA4LjQ5OC04LjQ5OCA4LjQ5OHptMC02LjVjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1di01LjVjMC0uNDE0LjMzNi0uNzUuNzUtLjc1cy43NS4zMzYuNzUuNzV2NS41YzAgLjQxNC0uMzM2Ljc1LS43NS43NXptLS4wMDIgM2MuNTUyIDAgMS0uNDQ4IDEtMXMtLjQ0OC0xLTEtMS0xIC40NDgtMSAxIC40NDggMSAxIDF6IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=">
        </span>
    </div>
    <div class="content">
        Lorem Ipsum is simply and scrambled it unchanged. in the 1960s with the release of Lorem
        Ipsum passages, and more recently with desktop publis
    </div>

    <div class="tags">
    </div>
</div>
</div> */
