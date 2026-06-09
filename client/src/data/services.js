export const services = [
  // ════════════ Wireless Network Services (WNS) ════════════
  {
    slug: 'rf-drive-testing',
    division: 'WNS',
    images: [
      '/images/services/telecommunications_1.jpg',
      '/images/services/telecommunications_2.jpg'
    ],
    title: 'RF Drive Testing, Competitive Benchmarking & Optimization',
    icon: 'Radio',
    shortDesc: 'Optimization testing scenarios for any GSM, GPRS/EDGE, UMTS/HSDPA, CDMA-1xRTT/EVDO, Wi-Fi, and WiMax network.',
    overview: 'ICOM possesses deep technical expertise across various optimization testing scenarios for any GSM, GPRS/EDGE, UMTS/HSDPA, CDMA-1xRTT/EVDO, Wi-Fi, and WiMax network. We continually target deploying quality engineering solutions to meet the demanding requirements of major operators in Africa.\n\nOur drive testing services ensure that network resources are utilized efficiently, drop call rates are minimized, and user experience is maximized through data-driven modifications and parameter tuning.',
    subServices: [
      'Continuous Wave (CW) drive testing',
      'Single network drive test',
      'Cluster Optimization drive test',
      'Site Verification/Cell Shakedown drive test',
      'KPI/Final Acceptance drive test',
      'Competitive benchmarking (up to 7 networks dual technology) test',
      'Data Post-Processing and Analysis',
      'Frequency retune',
      'Network Parameter optimization'
    ],
    benefits: [
      { icon: 'CheckCircle', title: 'Thorough Auditing', description: 'Up to 7 networks tested concurrently with dual technologies.' },
      { icon: 'Zap', title: 'Immediate Optimization', description: 'Real-time parameter tuning recommendations for quick KPI recovery.' },
      { icon: 'Shield', title: 'Verified Compliance', description: 'Ensures SLA acceptance and final handover acceptance targets are met.' },
      { icon: 'Users', title: 'Expert Field Technicians', description: 'Experienced crews equipped with advanced TEMS/Anite scanners.' }
    ],
    process: [
      { step: 1, title: 'Scope definition', description: 'Defining the testing routes, clusters, and target KPIs.' },
      { step: 2, title: 'Data Gathering', description: 'Performing CW and active drive tests across defined nodes.' },
      { step: 3, title: 'Post-Processing', description: 'Analyzing log files and identifying issues like pilot pollution or drop calls.' },
      { step: 4, title: 'Parameter Optimization', description: 'Implementing frequency retuning and parameter modifications.' }
    ]
  },
  {
    slug: 'radio-network-design-planning',
    division: 'WNS',
    images: [
      '/images/services/telecommunications_3.jpg',
      '/images/services/telecommunications_1.jpg',
      '/images/services/telecommunications_2.jpg'
    ],
    title: 'Radio Network Design & Planning',
    icon: 'ClipboardList',
    shortDesc: 'Radio design, planning, site survey, and propagation model calibration utilizing state-of-the-art software tools.',
    overview: 'We utilize state-of-the-art design and software tools (including Planet, Asset, TEMS Cell Planner, Odyssey, and Cell Design) to guarantee customer criteria and specifications are met. Our experienced RF design engineers ensure that coverage, capacity, and quality targets are achieved with optimal site counts.',
    subServices: [
      'Radio design, planning, and optimization tools selection',
      'Macro/Micro radio network design and planning',
      'Link Budget Calculations',
      'BTS/BSC site survey, selection & nomination',
      'Propagation model calibration'
    ],
    benefits: [
      { icon: 'Gauge', title: 'Precision Planning', description: 'Detailed link budget calculations and propagation modeling.' },
      { icon: 'DollarSign', title: 'Cost Optimization', description: 'Accurate site nomination limits redundant infrastructure spend.' },
      { icon: 'Award', title: 'Industry Tools', description: 'Full mastery of Planet, Asset, Odyssey, and TEMS planners.' },
      { icon: 'CheckCircle', title: 'Vendor Standards', description: 'Aligned to global operator specifications.' }
    ],
    process: [
      { step: 1, title: 'Requirements Gathering', description: 'Understanding coverage areas, population density, and traffic models.' },
      { step: 2, title: 'Site Nominal Selection', description: 'Determining nominal coordinates using propagation simulation.' },
      { step: 3, title: 'Physical Survey', description: 'Conducting BSS site surveys to nominate candidate sites.' },
      { step: 4, title: 'Calibration & Design', description: 'Calibrating propagation models and finalizing link budgets.' }
    ]
  },
  {
    slug: 'bss-equipment-installation',
    division: 'WNS',
    images: [
      '/images/services/it-solutions_1.jpg',
      '/images/services/it-solutions_2.jpg'
    ],
    title: 'BSS Equipment Installation',
    icon: 'Plug',
    shortDesc: 'Deployment, hardware installation, cabling, earthing, and configuration of BSS, Node B, and power units.',
    overview: 'We offer comprehensive installation of relevant BSS equipment, like BSC/BTS, RNC & BTS/Node B (Indoor & Outdoor) deployment per installation documents. We ensure proper power supply units, rectifiers, and battery banks setup according to standard guidelines.',
    subServices: [
      'Installation of relevant BSS equipment, like BSC/BTS',
      'RNC & BTS/Node B (Indoor & Outdoor) deployment per installation documents',
      'Installation of rectifiers, battery banks, and power supply units',
      'Receiving, unpacking, and delivery of equipment onto the site floor',
      'Feeders/Jumpers connection, clamping, and earthing fixing to standard guidelines',
      'Equipment shelter and grounding system installation',
      'Software configuration'
    ],
    benefits: [
      { icon: 'Wrench', title: 'Expert Assembly', description: 'Flawless physical installation according to installation manuals.' },
      { icon: 'Shield', title: 'Earthing & Protection', description: 'Grounding systems setup to strictly guard against lightning.' },
      { icon: 'Clock', title: 'Timely Delivery', description: 'Fast unpacking, delivery, and power-up sequences.' },
      { icon: 'CheckCircle', title: 'Software Pre-configured', description: 'Basic software configuration performed on-site for remote access.' }
    ],
    process: [
      { step: 1, title: 'Site Inspection', description: 'Verifying shelter and grounding status before equipment delivery.' },
      { step: 2, title: 'Physical Setup', description: 'Mounting cabinets, rectifiers, battery banks, and Node B units.' },
      { step: 3, title: 'Cabling & Earthing', description: 'Connecting feeders, jumpers, clamping, and earthing to standards.' },
      { step: 4, title: 'Integration Testing', description: 'Applying software configuration and confirming alarms are clear.' }
    ]
  },
  {
    slug: 'civil-works',
    division: 'WNS',
    images: [
      '/images/services/electrical-infrastructure_1.jpg',
      '/images/services/electrical-infrastructure_2.jpg'
    ],
    title: 'Civil Works',
    icon: 'Package',
    shortDesc: 'Structural design, tower foundations, tower erection, antennae poles, and comprehensive civil site works.',
    overview: 'ICOM handles complete site construction including structural design, foundation supply and installation, tower erection, and fencing. We apply rigorous engineering standards to ensure all structural elements are built to withstand environmental stresses and support heavy telecom equipment safely.',
    subServices: [
      'Structural designs and analysis',
      'Supply and installation of tower foundations (excavation, rebar, framework, backfilling)',
      'Tower erection including painting and antenna mounting poles',
      'Erection of canopy and plinths',
      'Fabrication & installation of antennae poles and cable trays',
      'Comprehensive civil construction (underground, foundation, site work, fencing, etc.)'
    ],
    benefits: [
      { icon: 'ShieldCheck', title: 'Structural Integrity', description: 'Rigorous analysis ensuring towers withstand high wind loads.' },
      { icon: 'Settings', title: 'End-to-End Build', description: 'Excavation, rebar, concrete, erection, and fencing handled by one partner.' },
      { icon: 'Users', title: 'Heavy Equip Ready', description: 'All sites built to fully support multiple operator hardware mounts.' },
      { icon: 'Clock', title: 'Fast Site Access', description: 'Optimized civil construction timelines.' }
    ],
    process: [
      { step: 1, title: 'Design & Analysis', description: 'Conducting soil tests and structural designs for the site location.' },
      { step: 2, title: 'Foundation Casting', description: 'Excavating, setting rebar, framing, and pouring concrete foundations.' },
      { step: 3, title: 'Tower Erection', description: 'Assembling and erecting the steel structure, applying painting and safety markings.' },
      { step: 4, title: 'Site Finishing', description: 'Installing antennae poles, cable trays, plinths, canopy, and site fencing.' }
    ]
  },
  {
    slug: 'transmission-access-planning',
    division: 'WNS',
    images: [
      '/images/services/telecommunications_2.jpg',
      '/images/services/telecommunications_1.jpg'
    ],
    title: 'Transmission / Access Network Planning & Implementation',
    icon: 'Radio',
    shortDesc: 'Microwave link design, line of sight (LOS) determination, path loss calculations, and access nodes deployment.',
    overview: 'We plan and implement access and transmission networks using advanced software tools. From Line of Sight (LOS) determination to path profiling, interference analysis, and capacity upgrades, we deliver high-reliability microwave and backhaul links.',
    subServices: [
      'Site design, surveys, and selection',
      'Microwave interference analysis, link design, link budget analysis, and frequency planning',
      'Determining antenna positions, orientation, and Line of Sight (LOS) using advanced software',
      'Path Loss calculations and Path Profiling',
      'Deploying ATM networks, upgraded radios, nodes, etc.',
      'Capacity planning, upgrades, installation, commissioning, and maintenance',
      'Bit Error Rate Testing'
    ],
    benefits: [
      { icon: 'Zap', title: 'High Availability', description: 'Microwave links designed with robust fade margins and low path loss.' },
      { icon: 'Gauge', title: 'Clear Line-of-Sight', description: 'LOS surveys verified via advanced profiling software.' },
      { icon: 'Clock', title: 'Capacity Upgrades', description: 'Seamless capacity expansions and radio swaps with zero downtime.' },
      { icon: 'CheckCircle', title: 'Performance Verified', description: 'All links thoroughly tested with Bit Error Rate Testing (BERT).' }
    ],
    process: [
      { step: 1, title: 'LOS & Path Profiling', description: 'Analyzing terrain elevations and determining orientation and height requirements.' },
      { step: 2, title: 'Link Design', description: 'Performing link budget analysis, frequency planning, and interference checks.' },
      { step: 3, title: 'Installation & Alignment', description: 'Deploying microwave dishes and aligning paths for maximum signal level.' },
      { step: 4, title: 'Commissioning & BERT', description: 'Testing data transmission quality and monitoring bit error rates.' }
    ]
  },
  {
    slug: 'fiber-optic-transmission',
    division: 'WNS',
    images: [
      '/images/services/fiber-optic_1.jpg',
      '/images/services/fiber-optic_2.jpg'
    ],
    title: 'Fiber Optic Transmission (Installation, Testing & Maintenance)',
    icon: 'Cable',
    shortDesc: 'New build cable laying, Pirelli Sirocco blowing, fusion splicing, OTDR testing, and standby maintenance.',
    overview: 'We plan and build new fiber optic cable links, providing node/hub installation, single-mode, multimode, and ribbon splicing, and Pirelli Sirocco cable blowing. We support networks with standby maintenance crews and rapid fault diagnosis.',
    subServices: [
      'New build fiber optic cable installation, fiber optic design planning, and node/hub site installation',
      'New build cable splicing and testing (single-mode, multimode, and ribbon splicing)',
      'Cable blowing via Pirelli Sirocco',
      'Terminating, splicing, and commissioning of fiber optic links',
      'Fiber optic network maintenance services (fault checking, diagnosis, and card replacements)',
      'Cable repair and testing on railways, highways, and in buildings',
      'Deploying fully trained, highly experienced standby engineers'
    ],
    benefits: [
      { icon: 'CheckCircle', title: 'Low Splice Loss', description: 'Precision fusion splicing matching standard dB parameters.' },
      { icon: 'Zap', title: 'Advanced Cable Blowing', description: 'Pirelli Sirocco blowing techniques for rapid fiber rollout.' },
      { icon: 'Clock', title: '24/7 Standby Support', description: 'Emergency fiber cut repair teams stationed strategically.' },
      { icon: 'Shield', title: 'Diverse Routes', description: 'Experience installing fiber in railways, highways, and indoor areas.' }
    ],
    process: [
      { step: 1, title: 'Route Survey', description: 'Planning fiber runs, calculating duct sizes, and mapping out pull locations.' },
      { step: 2, title: 'Cable Blowing & Laying', description: 'Blowing fibers through microducts or laying armored fiber in trenches.' },
      { step: 3, title: 'Splicing & Termination', description: 'Splicing fibers at junctions and terminating at ODF patch panels.' },
      { step: 4, title: 'OTDR Testing', description: 'Validating end-to-end trace curves, db loss, and final link commissioning.' }
    ]
  },
  {
    slug: 'vsat-transmission',
    division: 'WNS',
    images: [
      '/images/services/procurement_1.jpg',
      '/images/services/procurement_2.jpg'
    ],
    title: 'VSAT Transmission',
    icon: 'Radio',
    shortDesc: 'VSAT site surveys, concrete works, hardware installation, commissioning, and provider coordination.',
    overview: 'ICOM provides complete VSAT transmission services including site surveys, foundation preparation, antenna installation, service provider liaising, and final commissioning for remote and rural connectivity.',
    subServices: [
      'Comprehensive site surveys and civil work',
      'Service provider liaising, hardware installation, and commissioning'
    ],
    benefits: [
      { icon: 'CheckCircle', title: 'Rural Coverage', description: 'Brings high-speed connectivity to locations lacking cellular/fiber networks.' },
      { icon: 'Users', title: 'Liaison Support', description: 'Complete management of provider registrations and configurations.' },
      { icon: 'Wrench', title: 'Robust Foundations', description: 'Civil foundation preparation designed to prevent dish shifting.' },
      { icon: 'Zap', title: 'Fast Deployment', description: 'Compact setup and commission workflow.' }
    ],
    process: [
      { step: 1, title: 'Survey & Obstruction Check', description: 'Assessing clear view to satellite positions and soil stability.' },
      { step: 2, title: 'Foundation Civil Works', description: 'Pouring plinths and setting mounting poles.' },
      { step: 3, title: 'Dish Mounting & Cabling', description: 'Assembling the VSAT dish, run RF cables to IDUs.' },
      { step: 4, title: 'Pointing & Activation', description: 'Aligning parameters with satellite signal and coordinating registration.' }
    ]
  },
  {
    slug: 'transmission-network-optimization',
    division: 'WNS',
    images: [
      '/images/services/telecommunications_1.jpg',
      '/images/services/telecommunications_3.jpg'
    ],
    title: 'Transmission Network Optimization and Sites Audit',
    icon: 'Radio',
    shortDesc: 'Antenna alignment (Azimuth, Center Line, Tilt), parameter checks, and transmission accessory audits.',
    overview: 'We perform detailed audits and optimization of transmission links, ensuring precise alignment of antennas to desired Azimuth, Center Line, and Tilt angles, and verifying accessory installation to improve network metrics.',
    subServices: [
      'Antenna alignment to desired Azimuth, Center Line, and Tilt angles',
      'Transmission parameters, accessories verification, and core metrics measurements'
    ],
    benefits: [
      { icon: 'Gauge', title: 'Maximize Link Availability', description: 'Correct alignment reduces fading and cross-polarization issues.' },
      { icon: 'CheckCircle', title: 'Asset Tracking', description: 'Full verification of transmission cards, accessories, and line states.' },
      { icon: 'ShieldCheck', title: 'Enhanced Stability', description: 'Minimizes packet drops and jitter on IP-based transmission.' },
      { icon: 'Award', title: 'Comprehensive Reports', description: 'Detailed audit sheets containing pre/post performance metrics.' }
    ],
    process: [
      { step: 1, title: 'Audit Scans', description: 'Taking baseline parameter readings and reviewing accessory inventory.' },
      { step: 2, title: 'Physical Inspection', description: 'Climbing towers to check hardware wear, tilt, and azimuth status.' },
      { step: 3, title: 'Link Alignment', description: 'Adjusting dish orientations to target angles for peak signal reception.' },
      { step: 4, title: 'Metric Verification', description: 'Measuring post-alignment parameters and archiving configuration settings.' }
    ]
  },
  {
    slug: 'network-operations-maintenance',
    division: 'WNS',
    images: [
      '/images/services/generator-services_1.jpg',
      '/images/services/generator-services_2.jpg'
    ],
    title: 'Network Operations & Maintenance (O&M)',
    icon: 'ClipboardList',
    shortDesc: 'Field maintenance, diesel filling management, remote/onsite alarm monitoring, and dispatch services.',
    overview: 'Our structured, system-based O&M routines cover all network elements. From diesel filling infrastructure to remote equipment monitoring, fault troubleshooting, capacity management, and field dispatch operations, ICOM ensures continuous uptime.',
    subServices: [
      'Network Field Maintenance: Hardware/software upgrades, rental management, site access management, and electrical/facilities maintenance.',
      'Diesel & Fuel Supply Infrastructure: Comprehensive diesel filling management.',
      'Network Monitoring & Operations: Fault & troubleshooting management, remote/onsite equipment and alarm monitoring, root cause analysis support/reporting, and recovery support.',
      'Capacity Management: KPI, database, backup, and configuration management.',
      'Process Management: Field scheduling & dispatch, technical help desk support, acceptance testing, and type approval testing.'
    ],
    benefits: [
      { icon: 'Headphones', title: 'Uninterrupted Uptime', description: 'Remote alarm monitoring and instant dispatch minimize outages.' },
      { icon: 'DollarSign', title: 'Fuel Cost Control', description: 'Rigorous diesel filling management preventing pilferage and run-dry situations.' },
      { icon: 'Wrench', title: 'Hardware Upgrades', description: 'Regular preventative maintenance keeps hardware running optimally.' },
      { icon: 'Shield', title: 'Strict SLA Adherence', description: 'Operational targets structured around strict carrier timelines.' }
    ],
    process: [
      { step: 1, title: 'Monitoring & Alarm', description: 'Reviewing status continuously via remote network monitoring.' },
      { step: 2, title: 'Dispatch & Response', description: 'Dispatching technician teams to investigate root causes on-site.' },
      { step: 3, title: 'Resolution & Check', description: 'Replacing faulty parts, performing software patches, or filling diesel.' },
      { step: 4, title: 'Logging & Reporting', description: 'Updating configuration backups and compiling fault resolution reports.' }
    ]
  },
  {
    slug: 'specialized-infrastructure-solutions',
    division: 'WNS',
    images: [
      '/images/services/solar-power_1.jpg',
      '/images/services/solar-power_2.jpg'
    ],
    title: 'Specialized & Hardware Infrastructure Solutions',
    icon: 'Package',
    shortDesc: 'Supply/repair of telecom hardware, generators, hybrid cooling, prefabricated shelters, COWs, and COLs.',
    overview: 'We supply and repair telecom hardware, maintain generators, and deploy energy-efficient cooling solutions. We also offer quick site solutions including prefabricated shelters, Cell-On-Wheels (COWs), COLs, and custom vendor enclosures.',
    subServices: [
      'Supply and repair of telecom hardware and generator maintenance/repair',
      'Hybrid & Fan Cooling Solutions',
      'Quick Site Solutions & Prefabricated Shelters',
      'Cell-On-Wheels (COWs) and Cell-On-Legs (COLs)',
      'Ready-to-Drive logistics management solutions',
      'Energy-efficient OEM products fitted to unique vendor requirements',
      'Outdoor Enclosures & Sun Shelters',
      'Base station antennas'
    ],
    benefits: [
      { icon: 'Zap', title: 'Rapid Rollout', description: 'Ready-to-Drive logistics and COWs for quick temporary capacity.' },
      { icon: 'Leaf', title: 'Energy Efficiency', description: 'Hybrid fan cooling solutions reducing fuel usage in enclosures.' },
      { icon: 'ShieldCheck', title: 'All-Weather Shelters', description: 'Prefabricated shelters built to withstand extreme heat and dust.' },
      { icon: 'Wrench', title: 'Reliable Power Support', description: 'OEM-trained generator mechanics on-call for scheduled services.' }
    ],
    process: [
      { step: 1, title: 'Audit & Sizing', description: 'Determining hardware capacity requirements and environmental heat load.' },
      { step: 2, title: 'Procurement & Logistics', description: 'Sourcing OEM enclosures, antennas, COWs, or generator spares.' },
      { step: 3, title: 'Deployment & Setup', description: 'Transporting, erection of COWs, setting plinths, and connecting cooling units.' },
      { step: 4, title: 'Testing & Tuning', description: 'Running performance runs under maximum thermal/power load before handover.' }
    ]
  },

  // ════════════ Enterprise Network Solutions (ENS) ════════════
  {
    slug: 'power-solutions',
    division: 'ENS',
    images: [
      '/images/services/power-solutions_1.jpg',
      '/images/services/power-solutions_2.jpg'
    ],
    title: 'Power Solutions',
    icon: 'Zap',
    shortDesc: 'Comprehensive power solutions including generator sales, repair & maintenance, and solar power systems for commercial and industrial applications.',
    overview: 'ICOM provides end-to-end power solutions encompassing generator sales, installation, repair and maintenance, as well as solar power systems design and deployment. We deliver reliable, cost-effective power infrastructure for telecommunications sites, commercial facilities, and industrial operations across Nigeria and West Africa.\n\nOur power solutions team combines deep expertise in both conventional generator systems and renewable solar energy to ensure uninterrupted power supply for mission-critical operations.',
    subServices: [
      'Generator sales — supply of new and refurbished diesel and gas generators (20kVA – 2000kVA)',
      'Generator repair and maintenance — scheduled servicing, overhaul, and emergency breakdown response',
      'Solar power systems — design, supply, and installation of solar PV panels, inverters, and battery storage',
      'Hybrid power solutions — integrated generator-solar systems for optimized fuel savings',
      'Automatic Transfer Switch (ATS) installation and maintenance',
      'Power audits and energy efficiency consulting',
      'Transformer sales, installation, and maintenance',
      'Uninterruptible Power Supply (UPS) systems'
    ],
    benefits: [
      { icon: 'Zap', title: 'Reliable Power', description: 'Guaranteed uptime with expertly maintained generator and solar systems.' },
      { icon: 'DollarSign', title: 'Cost Savings', description: 'Hybrid solar-generator solutions significantly reduce fuel and energy costs.' },
      { icon: 'Shield', title: 'Preventive Maintenance', description: 'Scheduled maintenance programs prevent costly breakdowns and extend equipment life.' },
      { icon: 'Leaf', title: 'Green Energy', description: 'Solar power solutions reduce carbon footprint and dependence on fossil fuels.' }
    ],
    process: [
      { step: 1, title: 'Power Audit & Assessment', description: 'Evaluating site power requirements, load profiles, and existing infrastructure.' },
      { step: 2, title: 'Solution Design', description: 'Engineering optimal generator sizing, solar array design, or hybrid configuration.' },
      { step: 3, title: 'Procurement & Installation', description: 'Sourcing equipment, site preparation, and professional installation.' },
      { step: 4, title: 'Commissioning & Support', description: 'System testing, handover, and ongoing maintenance support contracts.' }
    ]
  },
  {
    slug: 'repeater-systems-solutions',
    division: 'ENS',
    images: [
      '/images/services/procurement_2.jpg',
      '/images/services/procurement_1.jpg'
    ],
    title: 'Repeater Systems Solutions',
    icon: 'Radio',
    shortDesc: 'COMBA Pico/Micro RF Enhancers and digital nodes installation to maximize wide-area footprints.',
    overview: 'We deliver a complete line of high-efficiency COMBA hardware products to maximize and optimize network footprints. All COMBA RF enhancer products are fully self-diagnosing, self-adaptive, and maintenance-free, backed by full installation and integration.',
    subServices: [
      'COMBA Pico and Micro Enhancers: Off-air RF enhancers ideal for indoor environments like malls and office spaces.',
      'Macro Digital Nodes: High-capacity off-air repeaters providing strong wide-area RF signals through outdoor antennas along motorways, villages, and special events.',
      'Note: All COMBA RF enhancer products are fully self-diagnosing, self-adaptive, and maintenance-free.',
      'Full site installation, commissioning, and integration.'
    ],
    benefits: [
      { icon: 'CheckCircle', title: 'Self-Adaptive Gain', description: 'Repeater gains adjust automatically to prevent feedback oscillation.' },
      { icon: 'Zap', title: 'Maintenance Free', description: 'Advanced self-diagnosing circuitry minimizes manual site visits.' },
      { icon: 'Globe', title: 'Wide Area Coverage', description: 'Macro Digital Nodes extend strong signals along rural motorways.' },
      { icon: 'Award', title: 'Authorized COMBA Partner', description: 'Sourced direct from COMBA for warranty-backed authenticity.' }
    ],
    process: [
      { step: 1, title: 'Off-Air Signal Assessment', description: 'Finding donor signal coordinates and power levels on site.' },
      { step: 2, title: 'Donor Antenna Install', description: 'Installing high-gain donor antenna directed at the carrier BTS.' },
      { step: 3, title: 'Repeater Setup', description: 'Deploying Pico/Micro Enhancer units or Digital Nodes, connecting RF lines.' },
      { step: 4, title: 'Gain Calibration', description: 'Setting target gains, verifying DL/UL isolations, and commissioning node.' }
    ]
  },
  {
    slug: 'technical-consulting-project-management',
    division: 'ENS',
    images: [
      '/images/services/project-management_1.jpg',
      '/images/services/project-management_2.jpg'
    ],
    title: 'Technical Consulting & Project Management',
    icon: 'ClipboardList',
    shortDesc: 'Project standardizing, milestone tracking, cost control, procurement supervision, and technical leadership.',
    overview: 'ICOM provides technical leadership, standardizing project delivery processes, tracking milestones, managing resources, costs, and procurement, and producing transparent project reporting to guarantee efficient deployments.',
    subServices: [
      'Establishing clear project standards, guidelines, schedules, and milestone tracking.',
      'Streamlining delivery processes to guarantee efficient deployment timelines.',
      'End-to-end cost management, quality management, human resource management, and equipment procurement tracking.',
      'Transparent project reporting and technical leadership.'
    ],
    benefits: [
      { icon: 'Target', title: 'Milestone Tracking', description: 'Strict tracking ensures project schedules remain on course.' },
      { icon: 'PieChart', title: 'Cost Control', description: 'Precise financial modeling and budgeting prevent budget overruns.' },
      { icon: 'Users', title: 'Procurement Oversight', description: 'Close coordination with OEMs ensures correct hardware specs.' },
      { icon: 'MessageSquare', title: 'Clear Reporting', description: 'Honest, data-backed reports update stakeholders at every stage.' }
    ],
    process: [
      { step: 1, title: 'Project Initiation', description: 'Defining project scope, establishing standards, and setting guidelines.' },
      { step: 2, title: 'Planning & Sourcing', description: 'Detailing resource structures, procurement schedules, and task timelines.' },
      { step: 3, title: 'Execution & Control', description: 'Supervising field crews, tracing logistics, and managing project costs.' },
      { step: 4, title: 'Closeout & Delivery', description: 'Final inspection, documenting assets, and handover to client operations.' }
    ]
  }
];
