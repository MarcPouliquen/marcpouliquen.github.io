$(function()
{
    ///////////////////////////////////////////
    //  Gestion du scroll vertical du header //
    ///////////////////////////////////////////
    
    $('a.lienheader').click(function(){  
        var the_id = $(this).attr("href");  
        var headerHeight = $('#header').height() - 1;
        if (! $('#header').is(':visible')) {
            headerHeight = 0;
        }
        $('html, body').animate({  
            scrollTop:$(the_id).offset().top-headerHeight  
        }, 'slow');  
        return false;  
    });
        
    ///////////////////////////////////////////
    //    Gestion de l'opacité de la photo   //
    ///////////////////////////////////////////
    
    $(window).scroll(function(){ // On ajoute une fonction quand on défile dans le site

	// On récupère la position de la barre de défilement par rapport à notre fenêtre
	var scrollTop = $(window).scrollTop();

	// On récupère notre élément
	var menu = $('#headerfix');
        var lienHeader = $('a.lienheader');
        var headerHeight = $('#header').height() - 1;
        if (! $('#header').is(':visible')) {
            headerHeight = 0;
        }
        var hauteur = $('#top').height()+headerHeight;
        var photo = $('#mainphoto');
        var opac = 1-scrollTop/700;
                
        photo.css({opacity : opac});               
        var largeur_fenetre = $(window).width();
        if(largeur_fenetre<800){
            $('#menuExperiences').removeClass('hidden').addClass('visible');
        }
	if(scrollTop >= hauteur){
            menu.removeClass("rel").removeClass("black").addClass("fix").addClass("blue");
	}
        else{
            menu.removeClass("fix").removeClass("blue").addClass("rel").addClass("black");
	}
    });
    // On lance l'évènement scroll un première fois au chargement de la page
    $(window).scroll();

});
