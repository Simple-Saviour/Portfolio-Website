	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');


    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });

    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }


    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }

    function sendEmail(){
    
        Email.send({
            SecureToken : "6b74cf99-38cf-4923-b602-e6720f077477",
            From : "simplesaviour007@gmail.com",
            To : "simplesaviour007@gmail.com",
            Subject : "Contact Form Enquiry",
            Body : "Name : " + document.getElementById("name").value +
                    "<br>Email : " +  document.getElementById("email").value +
                    "<br>Phone Number : " +  document.getElementById("phone").value +
                    "<br>Message : " +  document.getElementById("message").value 
        }).then(
          message => alert("Thank you for your response")
        );
    }


    
