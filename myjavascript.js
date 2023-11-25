<script>
				$( document ).ready( function () {
					$( "#shopify-section-announcement-bar .has-slider.slider" ).slick( {
						autoplay: true,
						infinite: true,
						swipeToSlide: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplaySpeed: 5000,
						arrows: true,
						prevArrow: '<i class="slick-prev fa fa-chevron-left" aria-hidden="true"></i>',
						nextArrow: '<i class="slick-next fa fa-chevron-right" aria-hidden="true"></i>',
						cssEase: 'linear',
						responsive: [ {
								breakpoint: 1200,
								settings: {
									slidesToShow: 1,
								}
							},
							{
								breakpoint: 600,
								settings: {
									slidesToShow: 1,
								}
							}
						]
					} );
				} );

			</script>