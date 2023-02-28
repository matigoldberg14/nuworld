import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-T4EEP82VG5';
ReactGA.initialize(TRACKING_ID);

function analyticsEventTracker(name = 'Measurement') {
    return ReactGA.event(name);
}

export default analyticsEventTracker;
