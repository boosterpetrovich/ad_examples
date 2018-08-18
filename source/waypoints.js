export default class Waypoints {
    constructor(mapping) {
        window.WAYPOINTS = window.WAYPOINTS || []
        this.mapping = mapping;
    }

    define_waypoints(ads) {
        let mapping = this.mapping;
        let that = this;
        Object.entries(mapping).forEach(
            function([key, value]) {
                window.WAYPOINTS[key] = new Waypoint({
                    element: $('.' + key),
                    handler: function(direction) {
                        that.on_user_hit_waypoint(key, ads)
                    },
                    offset: 300
                })
            }
        );
    }

    on_user_hit_waypoint(key, ads) {
        //call refresh add init
        const element = document.querySelector('.' + key)
        const slot = this.mapping[key]
        // do DFP businesses
        ads.create_ad_container_next(slot, element)
        ads.refresh_slot(slot)
        // create container call dfp
        const waypoint = window.WAYPOINTS[key];
        // destroy to avoid duplication of calls
        this.destroy(waypoint);
    }

    destroy(waypoint) {
        waypoint.destroy()
    }
}
