// 获取元素
const post = document.querySelector("#post_main")
const post_content = Array.from(post.children)

const init_contents = () => {
    const contents_ol = document.querySelector("#contents_container > ol")

    // 从文章中遍历每个内容，并查找h1标题，渲染到目录组件
    let contents = []
    post_content.forEach(p => {
        if (p.nodeName === "H1") {
            contents.push({
                content: p.innerText,
                h2: []
            })
        }
        if (p.nodeName === "H2") {
            contents[contents.length - 1].h2.push({
                content: p.innerText,
                h3: []
            })
        }
        if (p.nodeName === "H3") {
            contents[contents.length - 1]
                .h2[contents[contents.length - 1].h2.length - 1].h3.push({
                    content: p.innerText
                })
        }
    })
    // console.log(contents)
    contents.forEach(c => {
        const h1_anchor = document.createElement("a")
        h1_anchor.href = `#${c.content}`
        const con_h1 = document.createElement("li")
        con_h1.innerText = c.content
        h1_anchor.appendChild(con_h1)
        contents_ol.appendChild(h1_anchor)

        if (c.h2) {
            const h2_ol = document.createElement("ol")
            h2_ol.classList.add("inside")

            c.h2.forEach(h2 => {
                const h2_anchor = document.createElement("a")
                h2_anchor.href = `#${h2.content}`
                const con_h2 = document.createElement("li")
                con_h2.innerText = h2.content
                h2_anchor.appendChild(con_h2)
                h2_ol.appendChild(h2_anchor)

                if (h2.h3) {
                    const h3_ol = document.createElement("ol")
                    h3_ol.classList.add("inside")

                    h2.h3.forEach(h3 => {
                        const h3_anchor = document.createElement("a")
                        h3_anchor.href = `#${h3.content}`
                        const con_h3 = document.createElement("li")
                        con_h3.innerText = h3.content
                        h3_anchor.appendChild(con_h3)
                        h3_ol.appendChild(h3_anchor)
                    })

                    h2_ol.appendChild(h3_ol)
                }    
            })

            contents_ol.appendChild(h2_ol)
        }
    })
}

init_contents()