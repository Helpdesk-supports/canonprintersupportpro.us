
    //Variables
    document.querySelectorAll(".item_header").forEach(
        function(header) {

            header.addEventListener("click", () => {
                if (header.parentNode.classList.contains("active")) {
                    header.parentNode.classList.remove("active");
                    header.parentNode.style.height = "54px";

                } else {
                    document.querySelectorAll(".item_header").forEach(
                        function(header) {
                            header.parentNode.classList.remove("active");
                            header.parentNode.style.height = "54px"
                        }
                    )
                    header.parentNode.classList.add("active");
                    let altPar = header.nextElementSibling.scrollHeight;
                    let altura = altPar + 54;
                    header.parentNode.style.height = altura + "px";

                }

            })
        }
    );
   
    

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
   
    // (function() {
    // var s = document.createElement('script');s.type='text/javascript';s.async=true;s.id='lsInitScript';
    // s.src='https://livesupporti.com/Scripts/clientAsync.js?acc=ecb06d58-f1d1-4e6f-8603-b79220967b59&skin=Modern';
    // var scr=document.getElementsByTagName('script')[0];scr.parentNode.appendChild(s, scr);
    // })();

    


<!--End of Tawk.to Script-->

      
        window.addEventListener("scroll", function () {
            var header = document.querySelector(".header");
            header.classList.toggle("sticky", window.scrollY > 0);
        });
  