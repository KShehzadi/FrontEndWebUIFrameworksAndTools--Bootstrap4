
        jQuery(document).ready(function(){
            jQuery("#mycarousel").carousel( { interval: 2000 } );
            jQuery("#carouselButton").click(function()
            {
                
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $('#mycarousel').carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $('#mycarousel').carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');
                }
            });
            $("#loginButton").click(function(){
                    $('#loginModal').modal('show');
            });

            $("#reserveTableButton").click(function(){
                    $('#reserveModal').modal('show');
            });
           
        });