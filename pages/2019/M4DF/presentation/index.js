import React from "react"

import styled from 'styled-components'

import chroma from 'chroma-js'
import { colors, Flex, Box } from 'ooni-components'
import {
  NettestGroupInstantMessaging,
  NettestGroupMiddleBoxes,
  NettestGroupPerformance,
  NettestGroupWebsites
} from 'ooni-components/dist/icons'

import 'prismjs/themes/prism.css'

import FaApple from 'react-icons/lib/fa/apple'
import FaAndroid from 'react-icons/lib/fa/android'
import MdLaptop from 'react-icons/lib/md/laptop'
import MdChatBubble from 'react-icons/lib/md/chat-bubble'

// Import Spectacle Core tags
import {
  Image,
  BlockQuote,
  Cite,
  Deck,
  CodePane,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fit,
  Fill,
  Appear,
  Link,
  Notes
} from "spectacle"

import preload from "spectacle/lib/utils/preloader"

import Terminal from "spectacle-terminal"
import CodeSlide from 'spectacle-code-slide'

// Import theme
import theme from "../../../../components/themes/ooni/index.js";

import WorldDots from '../../../../components/WorldDots'
import PhoneCarousel from '../../../../components/PhoneCarousel'

const images = {
  SourceLuke: require("../assets/source-luke.jpg"),
  OONIHorizontalColor: require("ooni-components/components/svgs/logos/OONI-HorizontalColor.svg"),
  OONIVerticalColor: require("ooni-components/components/svgs/logos/OONI-VerticalColor.svg"),
  ProbeVerticalColor: require("ooni-components/components/svgs/logos/Probe-VerticalColor.svg"),
  PipelineHorizontalMonochrome: require("ooni-components/components/svgs/logos/Pipeline-HorizontalMonochrome.svg"),
  APIHorizontalMonochrome: require("ooni-components/components/svgs/logos/API-HorizontalMonochrome.svg"),
  ExplorerHorizontalMonochrome: require("ooni-components/components/svgs/logos/Explorer-HorizontalMonochrome.svg"),
  FlagOfCuba: require("../assets/Flag_of_Cuba.svg"),
  FlagOfEthiopia: require("../assets/Flag_of_Ethiopia.svg"),
  FlagOfIndonesia: require("../assets/Flag_of_Indonesia.svg"),
  FlagOfIran: require("../assets/Flag_of_Iran.svg"),
  FlagOfPakistan: require("../assets/Flag_of_Pakistan.svg"),
  FlagOfSpain: require("../assets/Flag_of_Spain.svg"),
  BlockedDomainsInIran: require("../assets/BlockedDomainsInIran.svg"),
  CubaParknets: require("../assets/cuba-parknets.jpg"),
  CubaMediaBlocking: require("../assets/CubaMediaBlocking.png"),
  VenezuelaCover: require("../assets/VenezuelaCover.png"),

  OnionBlue: require("../assets/Onion_Blue_Icon.svg"),
  MobileAppScreenshot1: require("../assets/MobileAppScreenshot1.png"),
  MobileAppScreenshot2: require("../assets/MobileAppScreenshot2.png"),
  MobileAppScreenshot3: require("../assets/MobileAppScreenshot3.png"),
  MobileAppScreenshot4: require("../assets/MobileAppScreenshot4.png"),
  MobileAppScreenshot5: require("../assets/MobileAppScreenshot5.png"),
  OONIAPIScreenshot: require("../assets/OONIAPI-Screenshot.png"),
  OONIRunScreenshot: require("../assets/OONIRun-Screenshot.png"),
  OONIExplorerScreenshot: require("../assets/OONIExplorer-Screenshot.png"),
  OONIProbeScreenshot: require("../assets/OONIProbe-Screenshot.png"),
  MKScreenshot: require("../assets/MK-Screenshot.png"),
  MKLogo: require("../assets/Measurement-Kit.png"),
  OONIEcosystem: require("../assets/OONIEcosystem.svg"),
  FlagOfEgypt: require("../assets/Flag_of_Egypt.svg"),
  MeasurementKitChart: require("../assets/MeasurementKitChart.png"),
  OnboardingPopQuiz: require('../assets/OnboardingPopQuiz1.png'),
  OnboardingThingsToKnow: require('../assets/OnboardingThingsToKnow.png'),
  OONIArchitectureHorizontal: require('../assets/OONIArchitectureHorizontal.png'),
  OONIOrchestraArchitecture: require('../assets/OONIOrchestraArchitecture.png'),
  OONIProbeMobileRevampedDashboard: require('../assets/OONIProbeMobileRevampedDashboard.png'),
  OONIProbeMobileRevampedResults: require('../assets/OONIProbeMobileRevampedResults.png'),
  OONIExplorerRevamped: require('../assets/OONIExplorerRevamped.png'),
  OONIProbeDesktopDashboard: require('../assets/OONIProbeDesktopDashboard.png'),
  OONIBlob: require('../assets/ooniblob.jpg')
};

preload(images)

const GRID_HEIGHT = 400
const GRID_WIDTH = 300
const ECOSYSTEM_IMG_W = null
const ECOSYSTEM_IMG_H = 200

const Arrow = ({dir}) => {
  let transform
  let width
  let height
  let viewBox = '0 0 140 140'
  if (dir == 'down') {
    transform = 'rotate(90) translate(0 -40)'
    viewBox = '0 0 40 140'
    height = '200'
  } else if (dir == 'up') {
    transform = 'rotate(-90) translate(-140 0)'
    viewBox = '0 0 40 140'
    height = '200'
  } else if (dir == 'left') {
    transform = 'rotate(180) translate(-140 -40)'
    viewBox = '0 0 140 40'
    width = '200'
  } else {
    width = '200'
  }
  return (<svg viewBox={viewBox} width={width} height={height}>
  	<g transform={transform}><path d="M120,6.6L133.4,20L120,33.4l-2.3-2.4l9.3-9.4H6.6v-3.2H127L117.7,9L120,6.6z"/></g>
  </svg>
  )
}
const ooEcosystem = {
  ProbeVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Probe-VerticalMonochrome.svg"),
    top: 0,
    left: 0
  },
  SyncVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Sync-VerticalMonochrome.svg"),
    top: GRID_HEIGHT,
    left: 0
  },

  RunVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Run-VerticalMonochrome.svg"),
    top: 0,
    left: GRID_WIDTH
  },
  MeasurementKitMonochrome: {
    src: require("../assets/Measurement-Kit-BW.png"),
    top: GRID_HEIGHT,
    left: GRID_WIDTH,
  },

  ExplorerVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Explorer-VerticalMonochrome.svg"),
    top: 0,
    left: GRID_WIDTH*2,
  },
  APIVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/API-VerticalMonochrome.svg"),
    top: GRID_HEIGHT,
    left: GRID_WIDTH*2,
  },

  ProteusVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Proteus-VerticalMonochrome.svg"),
    top: GRID_HEIGHT/2,
    left: GRID_WIDTH*3,
  },

  PipelineVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Pipeline-VerticalMonochrome.svg"),
    top: GRID_HEIGHT,
    left: GRID_WIDTH*3
  },
}

// Require CSS
require("normalize.css");

const DefinitionTerm = styled(Text)`
font-size: 3.5rem !important;
text-align: left;
`

const DefinitionFonetics = styled(Text)`
  font-size: 2.5rem !important;
  color: ${colors.palette.gray4};
  display: inline;
`

const DefinitionItem = styled(ListItem)`
  text-align: left;
  padding-bottom: 20px;
  font-size: 2rem !important;
  text-indent: -30px;
  padding-left: 30px;
  color: ${colors.palette.gray2};
`

const Definition = styled.span`
  color: ${colors.palette.black};
`

const WorldDotsBg = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: '50%';
  transform: translateX(-50%) translateY(-20%);

  z-index: -1;
  opacity: 0.8;
  filter: blur(3px)
`

const CountryReportHeading = styled.div`
  background-color: ${colors.OONI_BLUE};
  color: ${colors.palette.white};
  font-size: 3rem;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`

const CountryReportDate = styled.div`
  background-color: ${colors.OONI_BLUE};
  color: ${colors.palette.white};
  font-size: 2rem;
  padding: 20px;
  width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
`

const CountryReportFinding = styled.div`
  background-color: ${chroma(colors.palette.gray9).alpha(0.7).css()};
  color: ${colors.palette.white};
  padding: 20px;
  margin-top: 20px;
  text-align: left;
`
const WhiteImageContainer = styled.div`
  background-color: ${colors.palette.white};
`

const StyledFloatingLink = styled.div`
bottom: calc(-120vh - 50%);
left: calc(-50vw + 50%);
position: absolute;
width: 100vw;
height: 100vh;
`
const StyledFloatingLinkRight = styled.div`
bottom: calc(-120vh - 50%);
left: calc(50vw - 50%);
position: absolute;
width: 100vw;
height: 100vh;
`

const StyledPageLinkContainer = styled.div`
  text-align: left;
  padding-left: 100px;
  padding-top: 50px;
`

const StyledPageLink = styled(Link)`
  position: relative;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  background-color: ${colors.palette.white};
  border: 2px solid ${colors.palette.gray6};
  border-radius: 10px;
  box-shadow: 5px 10px 10px #888888;
`

const FloatingLink = ({url}) => (
  <StyledFloatingLink>
    <StyledPageLinkContainer>
      <StyledPageLink href={url}>{url}</StyledPageLink>
    </StyledPageLinkContainer>
  </StyledFloatingLink>
)

const FloatingLinkRight = ({url}) => (
  <StyledFloatingLinkRight>
    <StyledPageLinkContainer>
      <StyledPageLink href={url}>{url}</StyledPageLink>
    </StyledPageLinkContainer>
  </StyledFloatingLinkRight>
)

const StyledFloatingQuote= styled.div`
  background-color: white;
  padding-top: 5px;
  padding-bottom: 5px;
`

const StyledFloatingQuoteContainer = styled.div`
bottom: calc(-100vh - 50%);
left: calc(-50vw + 50%);
position: absolute;
width: 100vw;
height: 100vh;
`

const FloatingQuote = ({children}) => (
  <StyledFloatingQuoteContainer>
    <StyledFloatingQuote>
      <Text>{children}</Text>
    </StyledFloatingQuote>
  </StyledFloatingQuoteContainer>
)

const NettestType = styled(Fill)`
  padding-bottom: 20px;
  h4 {
    font-size: 2rem;
    color: ${colors.palette.black}
  }
  svg {
    fill: ${colors.palette.blue5}
  }
`



const BlueNumber = styled.span`
  color: ${colors.palette.blue5};
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="white">
          <Heading size={2}>
          New and Emerging Threats to Media Freedom
          </Heading>
          <Heading size={6}>
          Media 4 Democracy Forum, Washington DC, 7 May 2019
          </Heading>
          <Heading size={6}>
          Arturo Filastò
          </Heading>
          <Image width='300px' style={{paddingTop: '30px'}} src={images.OONIHorizontalColor} />
          <Text style={{color: colors.palette.blue5}}>https://slides.ooni.io/2019/M4DF</Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="white">
          <Notes>
          Arturo
          OONI is a Free software project (under the Tor Project) aimed at
          empowering decentralized efforts in increasing transparency of
          Internet Censorship around the world.

          The project started in 2012 and have since collected millions of
          measurements from over 200 countries around the world,
          shedding light on various forms of network interference.

          Mention that OONI does not deal with platform censorship (ex. looking
          at blocking of facebook posts or any platform-side censorship or
          restrictions).
          </Notes>
          <Image width="300px" src={images.OONIVerticalColor} align='right'/>
          <Heading size={3} textColor="primary">The Open Observatory of Network Interference</Heading>
          <WorldDotsBg>
            <WorldDots primaryColor={colors.palette.blue5} highlightColor={colors.palette.blue9}/>
          </WorldDotsBg>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={2} caps textColor="secondary">
            OONI Is
          </Heading>
          <Appear fid="1">
            <Heading size={2} caps fit textColor="primary">
              Open Methodologies
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps fit textColor="primary">
              Open Source Software
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fit textColor="primary">
              Open Data
            </Heading>
          </Appear>
          <Appear fid="4">
            <div>
            <Heading size={3} caps fit textColor="secondary">
              For Reproducible
            </Heading>
            <Heading size={3} caps fit textColor="secondary">
              Research!
            </Heading>
            </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfEgypt} bgDarken={0.7} bgSize='120%'>
          <Appear fid="2" order={2}>
            <CountryReportFinding>More than 100 media websites were found to be blocked</CountryReportFinding>
          </Appear>
          <Appear fid="3" order={3}>
            <CountryReportFinding>"Defense in depth" strategy for implementing
            blocking: two different middleboxes were found on some
            networks</CountryReportFinding>
          </Appear>
          <Appear fid="4" order={4}>
            <CountryReportFinding>Ad campaign to hijack blocked websites to revenue generating sites</CountryReportFinding>
          </Appear>
          <Appear fid=" 5" order={5}>
            <CountryReportFinding>A number of Egyptian media organizations have suspended their work entirely, as a result of persisting internet censorship</CountryReportFinding>
          </Appear>
          <Appear fid="1" order={1}>
            <div>
            <CountryReportHeading>State of Internet Censorship in Egypt</CountryReportHeading>
            <CountryReportDate>July 2018</CountryReportDate>
            <Link href='https://ooni.io/post/egypt-internet-censorship/'>https://ooni.io/post/egypt-internet-censorship/</Link>
            </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.CubaParknets} bgDarken={0.7} bgSize='120%'>
          <Appear fid="2" order={2}>
            <Image src={images.CubaMediaBlocking} />
          </Appear>
          <Appear fid="1" order={1}>
            <div>
            <CountryReportHeading>
              Cuba blocks independent media amid 2019 constitutional referendum
            </CountryReportHeading>
            <CountryReportDate>February 2019</CountryReportDate>
            </div>
          </Appear>
          <Appear fid="3" order={3}>
            <div>
            <Link href='https://ooni.torproject.org/post/cuba-referendum/'>https://ooni.torproject.org/post/cuba-referendum/</Link><br/>
            <Link href='https://ooni.torproject.org/post/cuba-internet-censorship-2017/'>https://ooni.torproject.org/post/cuba-internet-censorship-2017/</Link>
            </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.VenezuelaCover} bgDarken={0.7} bgSize='120%'>
          <Appear fid="2" order={2}>
          <CountryReportFinding>In 2018 we found media censorship to be pervasive as a number of independent media websites are blocked by means of DNS tampering.</CountryReportFinding>
          </Appear>
          <Appear fid="3" order={3}>
            <CountryReportFinding>Blocked news outlets include El Pitazo and El Nacional, while La Patilla was temporarily blocked in June 2018</CountryReportFinding>
          </Appear>
          <Appear fid="4" order={4}>
            <CountryReportFinding>The methods of implementing censorship changed in 2019 when CANTV started blocking wikipedia, twitter, instagram & youtube.</CountryReportFinding>
          </Appear>
          <Appear fid="1" order={1}>
            <div>
            <CountryReportHeading>
              From the blocking of Wikipedia to Social Media: Venezuela's Political Crisis
            </CountryReportHeading>
            <CountryReportDate>January 2019</CountryReportDate>
            </div>
          </Appear>
          <Appear fid="4" order={4}>
            <div>
            <Link href='https://ooni.torproject.org/post/venezuela-blocking-wikipedia-and-social-media-2019/'>https://ooni.torproject.org/post/venezuela-blocking-wikipedia-and-social-media-2019/</Link><br/>
            <Link href='https://ooni.torproject.org/post/venezuela-internet-censorship/'>https://ooni.torproject.org/post/venezuela-internet-censorship/</Link><br/>
            </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfEthiopia} bgDarken={0.7} bgSize='120%'>
          <Notes>
            <h4>Slide notes</h4>
            <ol>
            <li>Report published in December 2016 with Amnesty international</li>
            <li>Mobile blackout in October 2016</li>
            <li>Protests began on the 12 November 2015 in Ginchi, Oromo region.</li>
            <li>State of Emergency from 8 October 2016 until August 2017 (10 month long)</li>
            <li>DPI usage</li>
            </ol>
          </Notes>

          <Appear fid="2" order={2}>
            <CountryReportFinding>In 2016 than 15 Ethiopian media websites were blocked amidst a wave of deadly protests.
             </CountryReportFinding>
          </Appear>
          <Appear fid="3" order={3}>
            <CountryReportFinding>In 2018, under a new government, almost all of these sites seem to be accessible.</CountryReportFinding>
          </Appear>
          <Appear fid="1" order={1}>
            <div>

            <CountryReportHeading>Ethiopia: Verifying the unblocking of websites</CountryReportHeading>
            <CountryReportDate>June 2018</CountryReportDate>
            </div>
          </Appear>
          <Appear fid="4" order={4}>
            <div>
              <Link href='https://ooni.torproject.org/post/ethiopia-report/'>https://ooni.torproject.org/post/ethiopia-report/</Link><br/>
              <Link href='https://ooni.torproject.org/post/ethiopia-unblocking/'>https://ooni.torproject.org/post/ethiopia-unblocking/</Link>
            </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={2} caps textColor="secondary">
            OONI Today
          </Heading>
          <Appear fid="1">
            <Heading size={2} caps fit textColor="primary">
              <BlueNumber>30+</BlueNumber> research reports
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps fit textColor="primary">
              Team of <BlueNumber>7</BlueNumber>, <BlueNumber>27</BlueNumber> partnerships
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fit textColor="primary">
              <BlueNumber>200+</BlueNumber> countries, <BlueNumber>4.5k</BlueNumber> networks every month
            </Heading>
          </Appear>
          <Appear fid="4">
            <Heading size={2} caps fit textColor="primary">
              <BlueNumber>20k+</BlueNumber> monthly active users
            </Heading>
          </Appear>
          <Appear fid="5">
            <div>
            <Heading size={2} caps fit textColor="secondary">
              Is a growing global community
            </Heading>
            <Heading size={2} caps fit textColor="secondary">
             of censorship measurement researchers!
            </Heading>
            </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Layout>
            <NettestType>
              <NettestGroupWebsites size="150px" />
              <Heading size={4}>Web Censorship</Heading>
            </NettestType>

            <NettestType>
              <NettestGroupInstantMessaging size="150px" />
              <Heading size={4}>Instant Messaging Apps</Heading>
            </NettestType>

            <NettestType>
              <Image src={images.OnionBlue} height="145px" />
              <Heading size={4}>Censorship Circumvention</Heading>
            </NettestType>

          </Layout>
          <Layout style={{paddingTop: '20px'}}>
            <NettestType>
              <NettestGroupMiddleBoxes size="150px" />
              <Heading size={4} style={{paddingTop: '20px'}}>Middleboxes</Heading>
            </NettestType>

            <NettestType>
              <NettestGroupPerformance size="150px" />
              <Heading size={4} style={{paddingTop: '20px'}}>Speed & Performance</Heading>
            </NettestType>
          </Layout>
          <Heading size={2} textColor="primary" caps style={{paddingTop: '40px'}}>OONI tests</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading>Learn More</Heading>
          <List>
          <ListItem><Link href="https://ooni.torproject.org/">https://ooni.torproject.org/</Link></ListItem>
          <ListItem><Link href="https://api.ooni.io/">https://api.ooni.io/</Link></ListItem>
          <ListItem><Link href="https://explorer.ooni.io/">https://explorer.ooni.io/</Link></ListItem>

          <Heading size={4}>Contacts</Heading>
          <ListItem><Link href="https://slack.openobservatory.org/">https://slack.openobservatory.org/</Link></ListItem>
          <ListItem><Link href="mailto:contact+foci18@openobservatory.org">contact@openobservatory.org</Link></ListItem>
          <ListItem><Link href="https://twitter.com/openobservatory/">@OpenObservatory</Link></ListItem>
          </List>
        </Slide>

      </Deck>
    );
  }
}
