import assuranceWireless from '../assets/clients/Assurance_Wireless_logo.png';
import att from '../assets/clients/at&t.jpeg';
import britishGas from '../assets/clients/british-gas.png';
import britishRedCross from '../assets/clients/British_Red_Cross_logo.svg.webp';
import bt from '../assets/clients/BT_logo.png';
import ee from '../assets/clients/ee.svg';
import helloFresh from '../assets/clients/hello-freshpng.png';
import medicine from '../assets/clients/medicine.webp';
import milkMore from '../assets/clients/milk-more.jpeg';
import plan from '../assets/clients/plan.png';
import sfeEnergy from '../assets/clients/sfe-energy.png';
import shellEnergy from '../assets/clients/ShellEnergyLogo.png';
import sprint from '../assets/clients/sprint.png';
import tMobile from '../assets/clients/T-Mobile-Logo.jpg';
import yesBank from '../assets/clients/Yes_Bank_Logo.png';
import launch180 from '../assets/clients/launch180_uk_logo.jpg';
import caledonia from '../assets/clients/caledonia.jpg';
import nomad from '../assets/clients/nomad.png';

export interface ClientLogo {
  name: string;
  logo: string;
}

export const clientLogos: ClientLogo[] = [
  { name: 'AT&T', logo: att },
  { name: 'T-Mobile', logo: tMobile },
  { name: 'Sprint', logo: sprint },
  { name: 'BT', logo: bt },
  { name: 'EE', logo: ee },
  { name: 'Shell Energy', logo: shellEnergy },
  { name: 'British Gas', logo: britishGas },
  { name: 'SFE Energy', logo: sfeEnergy },
  { name: 'YES BANK', logo: yesBank },
  { name: 'HelloFresh', logo: helloFresh },
  { name: 'Milk & More', logo: milkMore },
  { name: 'British Red Cross', logo: britishRedCross },
  { name: 'Médecins Sans Frontières', logo: medicine },
  { name: 'Plan International', logo: plan },
  { name: 'Assurance Wireless', logo: assuranceWireless },
  { name: 'Launch180 UK', logo: launch180 },
  { name: 'Caledonia', logo: caledonia },
  { name: 'Nomad', logo: nomad },
];
