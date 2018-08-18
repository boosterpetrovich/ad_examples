import jquery from 'script-loader!./../node_modules/jquery/dist/jquery.min.js'
import jqueryWaypoints from 'script-loader!./../node_modules/waypoints/lib/jquery.waypoints.min.js'

import Ads from './ads'
import Waypoints from './waypoints'
import {DFP_NETWORK, AD_SLOTS, WAYPOINTS_TO_AD_SLOTS} from './const'

let ads = new Ads(DFP_NETWORK, AD_SLOTS, 'test_setup', 'some_data')
let waypoints = new Waypoints(WAYPOINTS_TO_AD_SLOTS)

document.addEventListener('DOMContentLoaded', function() {
    let parent = document.querySelector('.page_wrapper')
    ads.create_ad_container('hmiru_ngs_ngs_top', parent)
    // call the toppest ad slot refresh
    ads.refresh_slot('hmiru_ngs_ngs_top')
    // define all waypoints on the page
    waypoints.define_waypoints(ads);
})
