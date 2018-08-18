export default class Ads {

    constructor(dfp_network, ad_slots, data, device) {
        this.dfp_network = dfp_network;
        this.ad_slots = ad_slots;
        this.data = data;
        this.device = device;

        window.googletag = window.googletag || {}
        window.googletag.cmd = window.googletag.cmd || []
        window.DFP_SLOTS = window.DFP_SLOTS || []

        this.init_dfp();
        this.define_ad_slots();
    }

    init_dfp() {
        (function(d, s, id){
           var js, gjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = "//www.googletagservices.com/tag/js/gpt.js";
           gjs.parentNode.insertBefore(js, gjs);
       }(document, 'script', 'gpt_js'));
    }

    define_ad_slots() {
        var that = this;
        googletag.cmd.push(function() {
            for (var i=0; i < that.ad_slots.length; i++) {
                // define sizes
                var ad_sizes = that.ad_slots[i].sizes;
                window.DFP_SLOTS[that.ad_slots[i].name] = googletag.defineSlot('/' + that.dfp_network + '/' + that.ad_slots[i].dfp_adunit, ad_sizes, that.ad_slots[i].name).addService(googletag.pubads());
            }
        });

        googletag.cmd.push(function() {
            googletag.pubads().enableSingleRequest();
            googletag.pubads().disableInitialLoad();
            googletag.enableServices();
        });
    }

    refresh_slot(name) {
        console.log('refresh + display call of ' + name);
        googletag.cmd.push(function() {
            googletag.display(name);
            googletag.pubads().refresh([window.DFP_SLOTS[name]]);
        });
    }

    create_ad_container(div_id, parent) {
        console.log('create ad container for ' + div_id);
        let container = document.createElement('div');
        container.id = div_id;
        container.classList.add('ad_container');
        parent.insertBefore(container, parent.firstChild);
    }

    create_ad_container_next(div_id, element) {
        console.log('create ad container for ' + div_id);
        let container = document.createElement('div');
        container.id = div_id;
        container.classList.add('ad_container');
        element.parentNode.insertBefore(container, element.nextSibling);
    }


}
