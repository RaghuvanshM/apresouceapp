import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Button from '../../controls/Button/Button';
import Images from '../../utils/Images';
import Header from '../Header/Header';
import styles from './style';

export default class Terms extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title={'Terms of Use'} {...this.props} />
        <ScrollView style={styles.section1}>

        <View style={styles.imageSection}>
          <Image source={Images.termsOfService} style={styles.img} />
        </View>
          <Text style={styles.heading}>AGREEMENT TO TERMS</Text>
          <Text style={styles.label}>
            These Terms and Conditions constitute a legally binding agreement
            made between you, whether personally or on behalf of an entity
            (“you”) and [your business name] (“we,” “us” or “our”), concerning
            your access to and use of our mobile application (the
            “Application”). You agree that by accessing the Application, you
            have read, understood, and agree to be bound by all of these Terms
            and Conditions Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND
            CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
            APPLICATION AND YOU MUST DISCONTINUE USE IMMEDIATELY.{'\n'}{'\n'}Supplemental
            terms and conditions or documents that may be posted on the
            Application from time to time are hereby expressly incorporated
            herein by reference. We reserve the right, in our sole discretion,
            to make changes or modifications to I UNDERSTAND these Terms and OK,
            Conditions at any time and for any reason. We will alert you about
            any changes by updating the “Last updated” date of these Terms and
            Conditions and you waive any right to receive specific notice of
            each such change. It is your responsibility to periodically review
            these Terms and Conditions to stay informed of updates. You will be
            subject to, and will be deemed to have been made aware of and to
            have accepted, the changes in any revised Terms and Conditions by
            your continued use of the Application after the date such revised
            Terms are posted.{'\n'}{'\n'}The information provided on the Application is not
            intended for distribution to or use by any person or entity in any
            jurisdiction or country where such distribution or use would be
            contrary to law or regulation or which would subject us to any
            registration requirement within such jurisdiction or country.
            Accordingly, those persons who choose to access the Application from
            other locations do so on their own initiative and are solely
            responsible for compliance with local laws, if and to the extent
            local laws are applicable.{'\n'}{'\n'}These Terms and Conditions were generated
            by Termly’s Terms and Conditions Generator.{'\n'}{'\n'}[Choose one of the
            options below]{'\n'}{'\n'}Option 1: The Application is intended for users who
            are at least 18 years old. Persons under the age of 13 are not
            permitted to register for the Application.{'\n'}{'\n'}Option 2: The Application
            is intended for users who are at least 13 years of age. All users
            who are minors in the jurisdiction in which they reside (generally
            under the age of 18) must have the permission of, and be directly
            supervised by, their parent or guardian to use the Application. If
            you are a minor, you must have your parent or guardian read and
            agree to these Terms of Use prior to you using the Application.
            {'\n'}{'\n'}INTELLECTUAL PROPERTY RIGHTS{'\n'}{'\n'}Unless otherwise indicated, the
            Application is our proprietary property and all source code,
            databases, functionality, software, website designs, audio, video,
            text, photographs, and graphics on the Application (collectively,
            the “Content”) and the trademarks, service marks, and logos
            contained therein (the “Marks”) are owned or controlled by us or
            licensed to us, and are protected by copyright and trademark laws
            and various other intellectual property rights and unfair
            competition laws of the United States, foreign jurisdictions, and
            international conventions. The Content and the Marks are provided on
            the Application “AS IS” for your information and personal use only.
            Except as expressly provided in these Terms of Use, no part of the
            Application and no Content or Marks may be copied, reproduced,
            aggregated, republished, uploaded, posted, publicly displayed,
            encoded, translated, transmitted, distributed, sold, licensed, or
            otherwise exploited for any commercial purpose whatsoever, without
            our express prior written permission.{'\n'}{'\n'}Provided that you are eligible
            to use the Application, you are granted a limited license to access
            and use the Application and to download or print a copy of any
            portion of the Content to which you have properly gained access
            solely for your personal, non-commercial use. We reserve all rights
            not expressly granted to you in and to the Application, Content, and
            the Marks.{'\n'}{'\n'}USER REPRESENTATIONS{'\n'}{'\n'}By using the Application, you
            represent and warrant that: (1) all registration information you
            submit will be true, accurate, current, and complete; (2) you will
            maintain the accuracy of such information and promptly update such
            registration information as necessary; (3) you have the legal
            capacity and you agree to comply with these Terms of Use; (4) you
            are not under the age of 13; (5) not a minor in the jurisdiction in
            which you reside, or if a minor, you have received parental
            permission to use the Site; (6) you will not access the Application
            through automated or non-human means, whether through a bot, script
            or otherwise; (7) you will not use the Application for any illegal
            or unauthorized purpose; and (8) your use of the Application will
            not violate any applicable law or regulation.{'\n'}{'\n'}If you provide any
            information that is untrue, inaccurate, not current, or incomplete,
            we have the right to suspend or terminate your account and refuse
            any and all current or future use of the Application(or any portion
            thereof).{'\n'}{'\n'}USER REGISTRATION{'\n'}{'\n'}You may be required to register with the
            Application. You agree to keep your password confidential and will
            be responsible for all use of your account and password. We reserve
            the right to remove, reclaim, or change a username you select if we
            determine, in our sole discretion, that such username is
            inappropriate, obscene, or otherwise objectionable.{'\n'}{'\n'}PROHIBITED
            ACTIVITIES{'\n'}{'\n'}You may not access or use the Application for any purpose
            other than that for which we make the Application available. The
            Application may not be used in connection with any commercial
            endeavors except those that are specifically endorsed or approved by
            us.
          </Text>
       
        <View style={styles.section2}>
          <Button title="OK, I UNDERSTAND" style={{width: '90%'}} onPress={()=>this.props.navigation.navigate('homeTabNavigator')} />
        </View>
        </ScrollView>
      </View>
    );
  }
}
