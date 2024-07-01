importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"788a26bbe6de7e92a6124baf29a7bacc","url":"assignment.html"},{"revision":"2e20bdebbffaff1e45b60c2d7466b6c9","url":"feedback.html"},{"revision":"1cb6f6cfe8a85ba4ccb50b2e623ecedb","url":"images/5EnjPfms.png"},{"revision":"1a500a3c5bbf2c201b25052e68a3c00e","url":"images/7CY2qwlP.png"},{"revision":"60c09954afdda9c214ae349ac3329e90","url":"images/7KlKX0Ka.png"},{"revision":"1b4073e49edd89bf22f3f956cbf2a2d9","url":"images/eq1.jpg"},{"revision":"46ad74e3a57404c77253c8b182269248","url":"images/eq2.jpg"},{"revision":"f95549343339e7ddee4fb654d8b5abe4","url":"images/eq3.jpg"},{"revision":"237e7defb15e88b0facbc76601d8c8ff","url":"images/eq4.jpg"},{"revision":"a73b907e7400856c7b5ddc90fdcdf04d","url":"images/j1lXitGp.png"},{"revision":"71e02aa382cb60afb89983d93f6dd657","url":"images/KzKdXIFK.png"},{"revision":"a07ff410127c5db030e6206d55677648","url":"images/pmfr4.png"},{"revision":"6d216aabf5bf45d0f4816cf333994f1c","url":"images/prpfA.png"},{"revision":"cb05911ce7ce81f7558aafd2706b9b93","url":"index.html"},{"revision":"f5f330c4d725bd814b44fbdaf50a93cf","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook.css"},{"revision":"262b6b0ad513fbe807f47db9cf39b845","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook0x.png"},{"revision":"32a989dfc4f4bde24999c140ada58170","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook10x.png"},{"revision":"b8d5ea51a25893c4ff23f982f31e4cd7","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook11x.png"},{"revision":"a7268407325c163199b8b4a0d1aaf0a8","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook12x.png"},{"revision":"9e81c60e1fcb3e2bcaf4d0d53e51dc6c","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook13x.png"},{"revision":"c835221cb080ce3efc68ff2b77deca11","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook14x.png"},{"revision":"f098303b8d67b11d55e463f3f951e314","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook15x.png"},{"revision":"da17ba4578b73f3bece361a94be4e92b","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook16x.png"},{"revision":"ed0f27880004f5a61bea86bafeca3030","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook17x.png"},{"revision":"da3b1c7f585b9589459f1d6a2bea9264","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook18x.png"},{"revision":"4add9f41bd5428de17a34d7cb1e2c6c7","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook19x.png"},{"revision":"3f6dd9a256112aaadf77f41e4f4bb482","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook1x.png"},{"revision":"2e19e90e544f371bf3b3eed5cf8f1fe5","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook20x.png"},{"revision":"c5758cabf39d5db63b29a2f881e97f88","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook21x.png"},{"revision":"9d05eaf3b5d4a2552b872b8d37a52cee","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook22x.png"},{"revision":"e1d2af85c019b9f5ad6e4d4dd57a40f7","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook23x.png"},{"revision":"bc1245b69597e57863d90dc0fa4cd5e8","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook2x.png"},{"revision":"f0816ee1c7e80dd7ad54250ac7fc75af","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook3x.png"},{"revision":"f8664c3ea3fde893dd7a7b2816a8ef6a","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook4x.png"},{"revision":"7204e608f0d829682e0f7a7fb7af5089","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook5x.png"},{"revision":"fa2800085181d50d8cd4e8dcd9ffc3d4","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook6x.png"},{"revision":"b836de8c3c0005a99652bea4d2b8c7e2","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook7x.png"},{"revision":"ec95855e0a7a9f308e1762a417a59131","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook8x.png"},{"revision":"890b89b8b900ab1b54f9041a2715a4dc","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook9x.png"},{"revision":"024a32b24d9a1854ede637c3c560fe8b","url":"Libraries/stanford-Interactive Activation and Competition_files/jetsandsharkstable.png"},{"revision":"6093651be571fe02895a250837ddff16","url":"Libraries/stanford-Interactive Activation and Competition_files/jetsdiagram.png"},{"revision":"bfbed2bfefb3cdc97a27e274abdb298f","url":"Libraries/stanford-Interactive Activation and Competition_files/netviewer100.png"},{"revision":"dbf0b4cbe87be45e4b4ae9f303a0ea02","url":"Libraries/stanford-Interactive Activation and Competition_files/netviewerInit.png"},{"revision":"2ff1f6c65f990fed86769663e1598501","url":"Libraries/stanford-Interactive Activation and Competition.html"},{"revision":"4136430d0420ec43f7af6c56a97b0dbf","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"8c4bc171fcc7d8c77670fbc1f054f5d1","url":"posttest.html"},{"revision":"9dc50edec3944879c8e2635221e0fd2a","url":"posttest.json"},{"revision":"2be3ae49d5ac81b88df5e4236781fe1e","url":"pretest.html"},{"revision":"9dc50edec3944879c8e2635221e0fd2a","url":"pretest.json"},{"revision":"9245173ccfcf557bf31bf83b8535c4f7","url":"procedure.html"},{"revision":"7f95b0352012650f7ef52a6c2cac76c2","url":"references.html"},{"revision":"8bd031f6e022ef6dee6b0ca9f14b58e3","url":"simulation.html"},{"revision":"608803e17e478ea16e80b37c5e548c3a","url":"simulation/css/general.css"},{"revision":"3e795b8e5867cd06a70b638f3d58d4fa","url":"simulation/css/jquery-ui.css"},{"revision":"8cbfe2cc7c63b65b47cee5b669f2fa34","url":"simulation/css/mathstyle.css"},{"revision":"8aa2327e2be5da3b1eb741169a8fea0f","url":"simulation/css/query.css"},{"revision":"cb98f193194cbf661c80cb6f23cd30ee","url":"simulation/css/sgca.css"},{"revision":"990cbb03f74c8f9186b2299dd4087c9d","url":"simulation/css/style.css"},{"revision":"de7c6ea05952ad1716c2e587f6d1b1f7","url":"simulation/Images/186.png"},{"revision":"a601bbbb25a257350a9fbb626f0c7e80","url":"simulation/Images/186.svg"},{"revision":"02aa72a4535d27fc9c928e78b4c8299e","url":"simulation/Images/188.png"},{"revision":"9daf09642bdccbec0caff78bfe6f9c56","url":"simulation/Images/188.svg"},{"revision":"8fc39147187191a91e96a9c1e16bb2bd","url":"simulation/Images/191.svg"},{"revision":"8c5f5e807bb4e2aa32ebbfef1c45e215","url":"simulation/Images/192.svg"},{"revision":"aa7252952e5da97403a94114b4aaed3d","url":"simulation/Images/198.svg"},{"revision":"f666f0268758025dd5f529d1b767871c","url":"simulation/Images/202.svg"},{"revision":"6c698d71f448d71d8628a0abdfb6bf67","url":"simulation/Images/204.svg"},{"revision":"05de12377d2d7913c72cb7fa088096a6","url":"simulation/Images/205.svg"},{"revision":"9735c1e3cdc5ddb3fa88917b6d351596","url":"simulation/Images/207.svg"},{"revision":"12cae4dadebc24c68bf9056339ba11b8","url":"simulation/Images/209.svg"},{"revision":"cce3ae5c442ba77174a844b36928e253","url":"simulation/Images/210.svg"},{"revision":"b2e265bfec74f3281d133ceb66ab4783","url":"simulation/Images/219.png"},{"revision":"edbe251c2fc8a94d471448e27d66fd77","url":"simulation/Images/229.png"},{"revision":"afe4902ebd1286ed1613ad7d0a409767","url":"simulation/Images/arrow1.png"},{"revision":"87c96e2cf2e14a66d23566a1acc7a66d","url":"simulation/Images/black.png"},{"revision":"e38906236c364e5ea5521bad3af6de1b","url":"simulation/Images/blackBox.png"},{"revision":"b2fecc5dc666eb66ffb2d7163b02e58c","url":"simulation/Images/conduct.png"},{"revision":"0aeac84d37b2760b01a9c3b7628d2e0e","url":"simulation/Images/conduct2.png"},{"revision":"7bcb69e2b0154783d10c5598cc596b9f","url":"simulation/Images/dataicon.png"},{"revision":"5ef87a30178365a285ce73c4d752a00f","url":"simulation/Images/demoicon.png"},{"revision":"414d28b1bf6d8408826f6b33bb918f94","url":"simulation/Images/emblem.png"},{"revision":"73cc8091f35cb204dd5b00e266e5ac7d","url":"simulation/Images/evalicon.png"},{"revision":"23372df4b1b13747a1e9dc5ecf8365b0","url":"simulation/Images/expicon.png"},{"revision":"24961744d9a62e3450205e99cf7be7fc","url":"simulation/Images/fourPipes.png"},{"revision":"6395abd56ee0d9fd39d7bb8edc2cc702","url":"simulation/Images/gatewall.png"},{"revision":"eb30cffd0f6e16e6b8d088434316d4cc","url":"simulation/Images/hollow.png"},{"revision":"6ff2a4f1b2f56dca684759f6c7840193","url":"simulation/Images/hotPipe.png"},{"revision":"8e248c54a2fda949aa263a60bb98de87","url":"simulation/Images/hotPump-Photoroom.png-Photoroom.png"},{"revision":"a34cf4c124264385a59e4d78caafef7c","url":"simulation/Images/hotPump.png"},{"revision":"8e248c54a2fda949aa263a60bb98de87","url":"simulation/Images/hotPumpw.png"},{"revision":"44bcbf14c220335392b2acfa5323c73e","url":"simulation/Images/label.jpg"},{"revision":"a9c965a562aa459780f92e7e012109da","url":"simulation/Images/label1.png"},{"revision":"77dc8eeb55e51450eb871b2eb4c7eb36","url":"simulation/Images/labelicon.png"},{"revision":"7305fbf212758d16b03a38d384da0f81","url":"simulation/Images/logo_nitk.png"},{"revision":"aad766fd8754de5dd4735ba0998ff085","url":"simulation/Images/msg.png"},{"revision":"25dee4c01f8ed16a3cd32afcb486d622","url":"simulation/Images/pipes.png"},{"revision":"8d60305c7159d0043a48709b1474edde","url":"simulation/Images/pump.png"},{"revision":"72d82536c7409ac139138a4a2963e8cc","url":"simulation/Images/rain.png"},{"revision":"5d2d2665e9f98e2f50f4fa3983deef40","url":"simulation/Images/rain2.png"},{"revision":"933c12e70a406058cabd226fe41a8208","url":"simulation/Images/rodHori.png"},{"revision":"02aa72a4535d27fc9c928e78b4c8299e","url":"simulation/Images/rodVertical.png"},{"revision":"a7e04a0def748c0b97013cd488b870f7","url":"simulation/Images/setup.png"},{"revision":"02b3856455113dbe967bd95f04df94f7","url":"simulation/Images/slider_handles.png"},{"revision":"f551cff6abd73cc62d36aec674ea6370","url":"simulation/Images/top.png"},{"revision":"89def895ecf431bf0635247e1c5113b1","url":"simulation/Images/topTower.png"},{"revision":"ebe6b6902a408fbf9cac6379a1477525","url":"simulation/Images/ui-icons_222222_256x240.png"},{"revision":"119dd0c2e94ad689de873ef39fd43e6e","url":"simulation/Images/ui-icons_454545_256x240.png"},{"revision":"20432e15d23e6e7725e4a933007aca6f","url":"simulation/Images/vessel_pump_combo.png"},{"revision":"d15269d49d21eeb081f6738c6ef380cf","url":"simulation/Images/w1.png"},{"revision":"cab34313bafeadbf47626a963db290db","url":"simulation/Images/w2 - Copy.png"},{"revision":"c0ed6b32f5cef9469ad90df919469662","url":"simulation/Images/w2.png"},{"revision":"253e30ae965d2cc464205ac049b7c3b7","url":"simulation/Images/w3.png"},{"revision":"b9ef1e7eddadab97744a2e7ed8a3c852","url":"simulation/Images/waterFlow.svg"},{"revision":"25551f00fe57a6b5eb91c0bdc97c4a8c","url":"simulation/Images/waterSteady.png"},{"revision":"2341a6d06c49d81d203155477b1f137e","url":"simulation/index.html"},{"revision":"39d29cb0f013656378d954a47a0ce5eb","url":"simulation/js/dpi.js"},{"revision":"84ca747eb5f076445ff836de49608628","url":"simulation/js/jquery-3.6.0.js"},{"revision":"08a481084856867d371586cbf8e835ef","url":"simulation/js/jquery.ui.touch-punch.js"},{"revision":"9b9e5df5ef16f8fdd3e65c14e2149f1f","url":"simulation/js/jquery.ui.touch-punch.min.js"},{"revision":"a09e13ee94d51c524b7e2a728c7d4039","url":"simulation/js/jquerymin.js"},{"revision":"16d15981cddb765694cd73757d23fc1a","url":"simulation/js/propeller.min.js"},{"revision":"ed26687a1e9f531e6f409191afbe8287","url":"simulation/js/sgca.js"},{"revision":"9d3a7e8f5772cf39c0ccad23217c9486","url":"theory.html"},{"revision":"f9032158b7891315ca9d7a36a27746d5","url":"validator-report.html"},{"revision":"f6d9d0da4ec1c6af382dcb67e7cdd156","url":"videos.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );