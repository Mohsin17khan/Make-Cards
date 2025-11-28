
        const items = [
            { name: "Mountains", imageUrl: "https://images.unsplash.com/photo-1761839256840-7780a45b85dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" },
            { name: "Forest Road", imageUrl: "https://plus.unsplash.com/premium_photo-1764258888293-dfdc8d0eb8a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" },
            { name: "Old Camera", imageUrl: "https://images.unsplash.com/photo-1763634048525-5ca118fe6c05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Laptop Desk", imageUrl: "https://images.unsplash.com/photo-1763197970981-b64c911263e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Coffee Cup", imageUrl: "https://plus.unsplash.com/premium_photo-1764258888293-dfdc8d0eb8a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" },
            { name: "Old Camera", imageUrl: "https://images.unsplash.com/photo-1763415186794-6dcdf550f467?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D" },
            { name: "City Lights", imageUrl: "https://images.unsplash.com/photo-1763688496557-46d22a1fbe47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D" },
            { name: "Waterfall", imageUrl: "https://images.unsplash.com/photo-1761809315136-45617469923c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D" },
            { name: "Old Camera", imageUrl: "https://images.unsplash.com/photo-1761850648640-2ee5870ee883?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Vintage Car", imageUrl: "https://plus.unsplash.com/premium_photo-1701085339113-d2a831aea1ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" },

            { name: "Coding Setup", imageUrl: "https://images.unsplash.com/photo-1763917695032-cd494f8839cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Waterfall", imageUrl: "https://images.unsplash.com/photo-1763594393372-d0c9619d6609?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Sunset Sky", imageUrl: "https://images.unsplash.com/photo-1763650080105-4803f2afa363?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Coding Setup", imageUrl: "https://media.istockphoto.com/id/1468104770/photo/happy-indian-family-sitting-at-park-in-winter-wear-or-warm-clothes.webp?a=1&b=1&s=612x612&w=0&k=20&c=EU182aqlC_KpOj3J3HgXd-Yz5N25zO-k0yCvAx6jGI0=" },
            { name: "Flying Bird", imageUrl: "https://images.unsplash.com/photo-1763831781185-2290dd2ad87f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D" },
            { name: "Old Camera", imageUrl: "https://images.unsplash.com/photo-1763713512968-fef8805cc6cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Waterfall", imageUrl: "https://images.unsplash.com/photo-1763650080105-4803f2afa363?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Night Sky", imageUrl: "https://plus.unsplash.com/premium_photo-1763727318961-56396eeaecac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Books", imageUrl: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D" },
            { name: "Coding Setup", imageUrl: "https://images.unsplash.com/photo-1763539912444-a71eb301510e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5N3x8fGVufDB8fHx8fA%3D%3D" },

            { name: "Random Art", imageUrl: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D" },
            { name: "Books", imageUrl: "https://images.unsplash.com/photo-1763666881551-c94fad252dad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Mount Fuji", imageUrl: "https://images.unsplash.com/photo-1763661665920-29a48ed51079?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Glass Building", imageUrl: "https://images.unsplash.com/photo-1763760523160-4b6f9375ddc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDd8fHxlbnwwfHx8fHw%3D" },
            { name: "Laptop Keyboard", imageUrl: "https://images.unsplash.com/photo-1764071289023-227898d0d827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Random Art", imageUrl: "https://images.unsplash.com/photo-1763661665920-29a48ed51079?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Winter Road", imageUrl: "https://images.unsplash.com/photo-1764071289023-227898d0d827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Color Wall", imageUrl: "https://images.unsplash.com/photo-1763634048498-6015a61165d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Books", imageUrl: "https://images.unsplash.com/photo-1764071289023-227898d0d827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Random Art", imageUrl: "https://images.unsplash.com/photo-1763760523160-4b6f9375ddc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDd8fHxlbnwwfHx8fHw%3D" }
        ];




        function showImages(items) {
            let clutter = ""
            items.forEach(function (elem) {
                clutter += `
        <div class="box">
                <img src=${elem.imageUrl} alt="">
                    <h1>${elem.name}</h1>
            </div>
        `
            })
            document.querySelector(".images").innerHTML = clutter
        };
        showImages(items);

        let input = document.querySelector(".input input");
        let history = document.querySelector(".history");


        function debounce(fn,delay){
            let timer;
            return function(){
                clearTimeout(timer);
                timer = setTimeout(() => {
                    fn()
                }, delay);
            }
        }


        input.addEventListener("input",debounce(function(){
             // console.log(input.value)
            let newImages = items.filter((elems) =>
                elems.name.toLowerCase().includes(input.value));
                showImages(newImages);
                 if (input.value === "" || newImages.length === 0) {
                    history.style.display = "none";
                    history.innerHTML = "";
                    return;
                }
                let clutter = ""
                newImages.forEach(function (obj) {
                    clutter += `  <div class="his">
                <h1>${obj.name}</h1>
                </div>`
                });
                history.style.display = "block"
                history.innerHTML = clutter

        }, 500))


