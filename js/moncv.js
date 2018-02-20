$(function()
{
    //////////////////////////////////////////////////////////////
    //  Gestion du scroll horizontal pour la section expériences//
    //////////////////////////////////////////////////////////////
    
    $('a.panel').click(function () {
        //reset and highlight the clicked link
        $('a.panel').removeClass('selected');
        $(this).addClass('selected');
        
        //grab the current item, to be used in resize function
        current = $(this);
        
        //scroll it to the destination
        $('#wrapper').scrollTo($(this).attr('href'), 800, { axis:'x' });        
        
        //set visible or hidden the bottom menu
        if($(this).attr('href')=='#e0'){
            $('#menuExperiences').removeClass('visible').addClass('hidden');
        }
        else{
            $('#menuExperiences').removeClass('hidden').addClass('visible');
        }
        
        //Color in blue the current item (when the user comes from the initial menu)
        if($(this).attr('href')=='#e0'){
            $('a.p0').addClass('selected');
        }
        else if($(this).attr('href')=='#e1'){
            $('a.p1').addClass('selected');
        }
        else if($(this).attr('href')=='#e2'){
            $('a.p2').addClass('selected');
        }
        else if($(this).attr('href')=='#e3'){
            $('a.p3').addClass('selected');
        }
            
        //cancel the link default behavior
        return false;
    });
    
    ///////////////////////////////////////////
    //  Gestion du scroll vertical du header //
    ///////////////////////////////////////////
    
    $('a.lienheader').click(function(){  
        var the_id = $(this).attr("href");  
        $('html, body').animate({  
            scrollTop:$(the_id).offset().top-39  
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
        var hauteur = $(window).height()+39;
        var photo = $('#mainphoto');
        var opac = 1-scrollTop/700;
                
        photo.css({opacity : opac});               
        var largeur_fenetre = $(window).width();
        if(largeur_fenetre<800){
            $('#menuExperiences').removeClass('hidden').addClass('visible');
        }
	if(scrollTop >= hauteur){
            menu.removeClass("rel").removeClass("black").addClass("fix").addClass("blue");
            lienHeader.hover(function(){
                lienHeader.css({color : black});
            });
	}
        else{
            menu.removeClass("fix").removeClass("blue").addClass("rel").addClass("black");
            lienHeader.hover(function(){
                lienHeader.css({color : white});
            });
	}
    });
    // On lance l'évènement scroll un première fois au chargement de la page
    $(window).scroll();

});