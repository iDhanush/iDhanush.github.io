window.addEventListener('scroll', function () {
    var fixme = document.querySelector('.con-con');
    var fixmeTop = 120
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    console.log(currentScroll, fixme.scrollTop)
    if (currentScroll >= fixmeTop) {
        fixme.style.position = 'fixed';
        fixme.style.right = '0';
        fixme.style.top = "0"
        fixme.style.marginTop = "50px";
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
    readmore: "data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0yMDEuNTQxLDU0LjQ1OGExMDQsMTA0LDAsMSwwLDAsMTQ3LjA3ODEzQTEwNC4xMDg0NSwxMDQuMTA4NDUsMCwwLDAsMjAxLjU0MSw1NC40NThaTTE2My45OTQxNCwxNDcuOTk3MWE4LDgsMCwwLDEtMTYsMFYxMTkuMzA5NmwtNDIuMzQzNzUsNDIuMzQzNzVhNy45OTkxNSw3Ljk5OTE1LDAsMCwxLTExLjMxMjUtMTEuMzEyNWw0Mi4zNDM3NS00Mi4zNDM3NWgtMjguNjg3NWE4LDgsMCwwLDEsMC0xNmg0OGE4LjAyNzUzLDguMDI3NTMsMCwwLDEsOCw4WiIvPjwvc3ZnPg==",

}

var myWorks = [
    {
        title: "RapidStore",
        content: "A multi-tenant e-commerce SaaS platform that lets businesses launch and manage scalable online stores from a single system.",
        source: "https://rapidstore.app",
        icon: ""
    },
    {
        title: "BlockChio",
        content: "A no-code platform for building multi-agent AI workflows with autonomous reasoning. Winner of Best Project (Sponsored Track) at BNB Hack Kerala.",
        source: "https://github.com/iDhanush/BlockChio_BNB_HACK_2025",
        icon: ""
    },
    {
        title: "ProductGPT",
        content: "An agentic AI shopping assistant that autonomously researches products and extracts data with 90% lower bandwidth usage.",
        source: "https://productgpt.in",
        icon: ""
    },
    {
        title: "AbroadGPT",
        content: "An AI-powered assistant for study-abroad agencies with personality-based recommendations and AI-generated university & country info cards.",
        source: "https://abroadbot.vercel.app/",
        icon: ""
    },
    {
        title: "Eventzo",
        content: "A scalable event management system with real-time ticketing, optimized for 10,000+ concurrent users and 99.9% uptime.",
        source: "https://eventzo.vercel.app",
        icon: ""
    },
    {
        title: "Placify App",
        content: "A mobile app built to streamline college placements with personalized feeds, real-time job notifications, and seamless student–faculty communication.",
        source: "https://www.linkedin.com/posts/idhanush_placements-backenddeveloper-techforgood-activity-7277985605483905027-lKnB",
        icon: "assets/placifylogo.svg"
    },
    {
        title: "IoT Robo V1",
        content: "An IoT-enabled animatronic greeting robot with dynamic facial expressions, interactive greetings, and motion-controlled hands.",
        source: "https://github.com/iDhanush/IoT_Animatronics_Robot_V1.git",
        icon: ""
    },
    {
        title: "BGM4RealLife",
        content: "A fun project that plays cinematic background music for real-life moments. Featured in the Top 10 'Useless Projects' for its creativity.",
        source: "https://bgm4reallife.vercel.app/",
        icon: ""
    },
    {
        title: "LinkTools.in",
        content: "A URL management platform offering link shortening, QR codes, analytics, and paywalled links—built for both personal and business use.",
        source: "https://linktools.pages.dev/",
        icon: ""
    },
];


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

async function test() {
    for (i = 0; i < myWorks.length; i++) {
        var card = createDiv("card")
        var contents = createDiv("contents")
        var title = createDiv("title")
        var readmore = createDiv("readmore")
        var content = createDiv("content")
        // var project_icon = createImg(myWorks[i]["icon"], "icon")

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
