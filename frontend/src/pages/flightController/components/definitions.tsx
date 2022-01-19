export const definitions: any = {
  mav_autopilot: {
    0: 'Generic autopilot, full support for everything',
    1: 'Reserved for future use.',
    2: 'autopilot',
    3: 'ArduPilot',
    4: 'OpenPilot',
    5: 'Generic autopilot only supporting simple waypoints',
    6: 'Generic autopilot supporting waypoints and other simple navigation commands',
    7: 'Generic autopilot supporting the full mission command set',
    8: 'No valid autopilot, e.g. a GCS or other MAVLink component',
    9: 'PPZ UAV - http://nongnu.org/paparazzi',
    10: 'UAV Dev Board',
    11: 'FlexiPilot',
    12: 'PX4 Autopilot',
    13: 'SMACCMPilot',
    14: 'AutoQuad -- http://autoquad.org',
    15: 'Armazila -- http://armazila.com',
    16: 'Aerob -- http://aerob.ru',
    17: 'ASLUAV autopilot -- http://www.asl.ethz.ch',
    18: 'SmartAP Autopilot - http://sky-drones.com',
    19: 'AirRails - http://uaventure.com'
  },
  mav_type: {
    0: ' Generic micro air vehicle',
    1: 'Fixed wing aircraft.',
    2: 'Quadrotor',
    3: 'Coaxial helicopter',
    4: 'Normal helicopter with tail rotor.',
    5: 'Ground installation',
    6: 'Operator control unit / ground control station',
    7: 'Airship, controlled',
    8: 'Free balloon, uncontrolled',
    9: 'Rocket',
    10: 'Ground rover',
    11: 'Surface vessel, boat, ship',
    12: 'Submarine',
    13: 'Hexarotor',
    14: 'Octorotor',
    15: 'Tricopter',
    16: 'Flapping wing',
    17: 'Kite',
    18: 'Onboard companion controller',
    19: ' Two-rotor VTOL using control surfaces in vertical operation in addition. Tailsitter.',
    20: 'Quad-rotor VTOL using a V-shaped quad config in vertical operation. Tailsitter.',
    21: 'Tiltrotor VTOL',
    22: 'VTOL reserved 2',
    23: 'VTOL reserved 3',
    24: 'VTOL reserved 4',
    25: 'VTOL reserved 5',
    26: 'Gimbal',
    27: 'ADSB system',
    28: 'Steerable, nonrigid airfoil',
    29: 'Dodecarotor',
    30: 'Camera',
    31: 'Charging station',
    32: 'FLARM collision avoidance system',
    33: 'Servo'
  },
  mav_result: {
    0: 'Command was successfully executed',
    1: 'Command cannot be executed at this time',
    2: 'Command denied',
    3: 'Command unsupported',
    4: 'Command Failed',
    5: 'Command in progress'
  },
  mav_mode: {
    0: 'MANUAL',
    1: 'CIRCLE',
    2: 'STABILIZE',
    5: 'FLY_BY_WIRE_A',
    6: 'FLY_BY_WIRE_B',
    10: 'AUTO',
    11: 'RTL',
    12: 'LOITER',
    15: 'GUIDED',
    16: 'INITIALISING'
  },
  error_messages: {
    gpio: '<h4>No Heartbeat received. </h4>',
    usb: '<h4>No Heartbeat received. </h4>',
    error: 'No HEARTBEAT. Check wiring and configuration',
    portNotAvailable: 'Could not find any device. Make sure you have connected it properly!'
  }
};
