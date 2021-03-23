$(document).ready(function(){
    //Slider

    if(window.location.href.indexOf("index")>-1){
      console.log("done");
      $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1000,
        responsive: true,
      });
    }

      //Posts
      if(window.location.href.indexOf("index")>-1){
        var posts=[
          {
              title: 'Prueba de titulo 1',
              date:'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula vitae eros ut euismod. Cras cursus molestie arcu bibendum suscipit. Cras aliquam sapien a sagittis consectetur. In laoreet orci varius dapibus maximus. Nunc dictum mi ipsum, id imperdiet mi ultrices non. Vivamus convallis ex nec nibh finibus vestibulum. Maecenas maximus, ligula quis auctor fringilla, felis odio vestibulum justo, in iaculis turpis nisi et dui. Vestibulum blandit, odio sit amet consequat consectetur, nisl augue mattis arcu, eget sodales metus risus a lorem. Mauris eu convallis eros. Sed rhoncus viverra venenatis. Aliquam id dignissim mauris, ac interdum velit. Morbi pulvinar ante felis, nec pulvinar risus ullamcorper in. Praesent quis ipsum dictum, faucibus elit vel, porttitor ipsum.'
              
          },
          {
            title: 'Prueba de titulo 2',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula vitae eros ut euismod. Cras cursus molestie arcu bibendum suscipit. Cras aliquam sapien a sagittis consectetur. In laoreet orci varius dapibus maximus. Nunc dictum mi ipsum, id imperdiet mi ultrices non. Vivamus convallis ex nec nibh finibus vestibulum. Maecenas maximus, ligula quis auctor fringilla, felis odio vestibulum justo, in iaculis turpis nisi et dui. Vestibulum blandit, odio sit amet consequat consectetur, nisl augue mattis arcu, eget sodales metus risus a lorem. Mauris eu convallis eros. Sed rhoncus viverra venenatis. Aliquam id dignissim mauris, ac interdum velit. Morbi pulvinar ante felis, nec pulvinar risus ullamcorper in. Praesent quis ipsum dictum, faucibus elit vel, porttitor ipsum.'},
          {
              title: 'Prueba de titulo 3',
              date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula vitae eros ut euismod. Cras cursus molestie arcu bibendum suscipit. Cras aliquam sapien a sagittis consectetur. In laoreet orci varius dapibus maximus. Nunc dictum mi ipsum, id imperdiet mi ultrices non. Vivamus convallis ex nec nibh finibus vestibulum. Maecenas maximus, ligula quis auctor fringilla, felis odio vestibulum justo, in iaculis turpis nisi et dui. Vestibulum blandit, odio sit amet consequat consectetur, nisl augue mattis arcu, eget sodales metus risus a lorem. Mauris eu convallis eros. Sed rhoncus viverra venenatis. Aliquam id dignissim mauris, ac interdum velit. Morbi pulvinar ante felis, nec pulvinar risus ullamcorper in. Praesent quis ipsum dictum, faucibus elit vel, porttitor ipsum.'
          },
          {
            title: 'Prueba de titulo 4',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula vitae eros ut euismod. Cras cursus molestie arcu bibendum suscipit. Cras aliquam sapien a sagittis consectetur. In laoreet orci varius dapibus maximus. Nunc dictum mi ipsum, id imperdiet mi ultrices non. Vivamus convallis ex nec nibh finibus vestibulum. Maecenas maximus, ligula quis auctor fringilla, felis odio vestibulum justo, in iaculis turpis nisi et dui. Vestibulum blandit, odio sit amet consequat consectetur, nisl augue mattis arcu, eget sodales metus risus a lorem. Mauris eu convallis eros. Sed rhoncus viverra venenatis. Aliquam id dignissim mauris, ac interdum velit. Morbi pulvinar ante felis, nec pulvinar risus ullamcorper in. Praesent quis ipsum dictum, faucibus elit vel, porttitor ipsum.'
          },
          {
              title: 'Prueba de titulo 5',
              date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula vitae eros ut euismod. Cras cursus molestie arcu bibendum suscipit. Cras aliquam sapien a sagittis consectetur. In laoreet orci varius dapibus maximus. Nunc dictum mi ipsum, id imperdiet mi ultrices non. Vivamus convallis ex nec nibh finibus vestibulum. Maecenas maximus, ligula quis auctor fringilla, felis odio vestibulum justo, in iaculis turpis nisi et dui. Vestibulum blandit, odio sit amet consequat consectetur, nisl augue mattis arcu, eget sodales metus risus a lorem. Mauris eu convallis eros. Sed rhoncus viverra venenatis. Aliquam id dignissim mauris, ac interdum velit. Morbi pulvinar ante felis, nec pulvinar risus ullamcorper in. Praesent quis ipsum dictum, faucibus elit vel, porttitor ipsum.'
          },
          {
            title: 'Prueba de titulo 6',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula vitae eros ut euismod. Cras cursus molestie arcu bibendum suscipit. Cras aliquam sapien a sagittis consectetur. In laoreet orci varius dapibus maximus. Nunc dictum mi ipsum, id imperdiet mi ultrices non. Vivamus convallis ex nec nibh finibus vestibulum. Maecenas maximus, ligula quis auctor fringilla, felis odio vestibulum justo, in iaculis turpis nisi et dui. Vestibulum blandit, odio sit amet consequat consectetur, nisl augue mattis arcu, eget sodales metus risus a lorem. Mauris eu convallis eros. Sed rhoncus viverra venenatis. Aliquam id dignissim mauris, ac interdum velit. Morbi pulvinar ante felis, nec pulvinar risus ullamcorper in. Praesent quis ipsum dictum, faucibus elit vel, porttitor ipsum.'
        },
        ];
        posts.forEach((item, index)=>{
              var post =  `
              <article class="post">
              <h2>${item.title}</h2>
              <span class="fecha">${item.date}</span>
              <p>
                ${item.content}
              </p>
              <a href="#" class="button-more">Leer más...</a>
              </article> 
            `;
          $('#posts').append(post);
        });
}

      //Selector de tema
      var theme = $("#theme");
      $("#t1").click(function(){
        theme.attr("href","css/tema1.css");
      });
      $("#t2").click(function(){
        theme.attr("href","css/tema2.css");
      });
      $("#t3").click(function(){
        theme.attr("href","css/tema3.css");
      });

      //Scroll para subir
      var s = $('.up');
      s.click(function(e){
        e.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        },500);
        return false;
      });


      //Login Falso
       $("#login form").submit(function(){
       var form_name = $('#nombre').val();

       localStorage.setItem("form_name", form_name);
      });

      var form_name = localStorage.getItem("form_name");
      if(form_name != null && form_name != "undefined"){
        var ap = $("#about p");
        ap.html("<br><strong>Bienvenido, " + form_name + "</strong>");
        ap.append("<a href='#' id='logout'>Logout</a>");
        $("#login").hide();

        $("#logout").click(function(){
         localStorage.clear(); 
         location.reload();
        });
      }

      //Acordeon
      if(window.location.href.indexOf("about")>-1){
        $('#acordeon').accordion();
      }

      //Clock
      if(window.location.href.indexOf("clock")>-1){
        setInterval(function(){
          var r = moment().format("hh:mm:ss");
          $("#clock").html(r);
        },1000)

      }

  //Validacion contacto
  if (window.location.href.indexOf("contact") > -1)
  {
    $("form input[name ='date']").datepicker({
      dateFormat: 'dd-mm-yy'
    });
    $.validate({
      lang: 'es',
      errorMessagePosition: 'top',
      scrollToTopOnError: true
    });
  }
});

