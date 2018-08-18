const DFP_NETWORK = '81006599'
const AD_SLOTS = [
    {
        name: 'hmiru_ngs_ngs_top',
        dfp_adunit: 'hmiru-ngs/ngs_top',
        sizes: [[728, 90], [980, 90], [960, 90], [950, 90], [1000, 90], [1000, 150], [1000, 250], [1000, 300]]
    },
    {
        name: 'hmiru_ngs_ngs04',
        dfp_adunit: 'hmiru-ngs/ngs04',
        sizes: [240, 400]
    },
    {
        name: 'hmiru_ngs_hmiru_ngs01',
        dfp_adunit: 'hmiru-ngs/hmiru-ngs01',
        sizes: [[240, 400], [342, 400]]
    },
    {
        name: 'hmiru_ngs_relax_ngs_03',
        dfp_adunit: 'hmiru-ngs/relax_ngs_03',
        sizes: [[240, 400], [240, 300]]
    }
];
const WAYPOINTS_TO_AD_SLOTS = {
    waypoint1: 'hmiru_ngs_ngs04',
    waypoint2: 'hmiru_ngs_hmiru_ngs01',
    waypoint3: 'hmiru_ngs_relax_ngs_03'
};

export { DFP_NETWORK,AD_SLOTS, WAYPOINTS_TO_AD_SLOTS }
