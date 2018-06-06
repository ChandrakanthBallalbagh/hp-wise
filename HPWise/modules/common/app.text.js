/* =========================================================
 * Module       :Common
 * File Name    :app.text.js
 * Description  :Contains the messages and other texts used throughout the project
 * Copyright    :Copyright © 2015, UTI Mutual Fund
 *               Written under contract by Robosoft Technologies Pvt. Ltd.
 * ========================================================= */

﻿
(function() {

    'use strict';
	angular.module('sample.text', [])
		.value('appText', {
			"error": {
				'server_error': 'Internal server error.',
				'required_ARN': 'Please provide ARN code.',
				'pattern_mailId':'Please enter a valid email address',
				'required_passcode': 'Please enter passcode.',
				'pattern_number':'Please Enter a valid mobile number',
				'pattern_name': 'Please enter a valid name',
				'invalid_passcode': 'Please enter 6 digit Passcode.',
				'number_ARN': 'ARN must be a number.',
				'number_passcode': 'Passcode must be a number.',
				'register_ARN':'Please provide ARN code.',
				'register_PAN':'Please provide PAN Number.',
				'register_OTP':'Please provide OTP Number.',
				'invalid_OTP':'Please enter 6 digit OTP.',
				'register_passcodeempty':'Please provide passcode.',
				'register_passcodemismatch':'Details Mismatch.',
				'register_IncorrectOTP':'Incorrect OTP.',
				'number_OTP': 'OTP must be a number.',
				'search_empty':'Please enter the search key.',
				'email_failed' : 'Failed to send the Email, Please try again later.',
				'no_data' : 'OOPS! No data found.',
				'select_asset':'Please select Asset Type.',
				'cannot_switchScheme':'You cannot switch the selected scheme.',
				'cannot_redeemScheme':'You cannot redeem the selected scheme.',
				'choose_toScheme':'Please choose To Scheme.',
				'partial_switchNotAllow':'Partial Switch for the selected scheme is not allowed.',
				'partial_redeemNotAllow':'Partial Redemption for the selected scheme is not allowed.',
				'amount_lessThanMandate':'Amount should be less than amount mentioned in the mandate form.',
				'selectInterestRate':'Please select Interest Rate.', 			
				'min_age_error': 'Minimum age for investment is 18 years',			
				'invalid_date': 'Please enter a valid date',			
				'invalid_pension': 'Amount should be greater than 1000 and multiple of hundred',		
				'invalid_contribution': 'If your age is below 52 years, contribution amount should be greater than or equal to Rs 500. Else, contribution amount should be greater than or equal to Rs 10000',
				'invalid_80cc_amount': 'Amount should be greater than 0, but less than Rs 1.5 lakh',
				'enter_email':'Please provide email id',
				'invalid_email':'Please provide valid email id',
				'enter_mobile':'Please provide mobile number',
				'invalid_mobile':'Please provide valid phone number',
				'enter_date':'Please provide date',
				'enter_accNum':'Please provide account number',
				'enter_ifsc':'Please provide IFSC',
				'enter_amount':'Please provide amount',
				'enter_folio':'Please provide folio number for reference',
				'enter_folio_app':'Please provide folio number / application number',
				'enter_appNum':'Please provide application number',
				'enter_startDate':'Please provide start date',
				'enter_endDate':'Please provide end date',
				'enter_holderName':'Please provide holder name',
				'enter_euin':'Please provide EUIN number',
				'enter_type':'Please select one option',
				'invalid_PAN':'Please enter valid PAN number',
				'choose_frequency':'Please choose frequency',
				'enter_investment':'Please enter investment amount',
				'enter_investment_swp':'Please enter installment amount',
				'select_all':'Select all values',
				'enter_installment':'Please enter installment',
				'enter_min_installment':'Amount should be more than minimum investment amount',
				'enter_min_investment':'Amount should be more than minimum investment amount',
				'click_ifsc_icon':'Please click on search icon to get the bank name for the IFSC entered',
				'choose_acc_type':'Please select the bank account type',
				'exceed_maxlength':'Installment exceeded maximum length',
				'select_scheme': 'Please select a Scheme Name.',
				'select_plan': 'Please select a Plan.',
				'select_option': 'Please select an Option.',
				'min_amount_info' : 'Amount cannot be less than the minimum amount.',
				'strip_valid_date':'Selected date should be after 3 days from the date of initiating request',
				'invalid_pan': 'Please enter valid PAN.',
				'max_amount_info' : 'Amount should be less than amount',
				'selectedFolio_contact_info_error' : 'Mobile Number and Email is not registered with the selected Folio.',
				'enteredFolio_contact_info_error' : 'Mobile Number and Email is not registered with the entered Folio.',
				'enteredPAN_contact_info_error' : 'Mobile Number and Email is not registered with the entered PAN.',
				'selectedFolio_mobileNumber_not_registered' : 'Mobile Number is not registered with the selected Folio.',
				'selectedFolio_email_not_registered' : 'Email is not registered with the selected Folio.',
				'enteredFolio_mobileNumber_not_registered' : 'Mobile Number is not registered with the entered Folio.',
				'enteredFolio_email_not_registered' : 'Email is not registered with the entered Folio.',
				'enteredPAN_mobileNumber_not_registered' : 'Mobile Number is not registered with the entered PAN.',
				'enteredPAN_email_not_registered' : 'Email is not registered with the entered PAN.',
				'exceed_minInstallment': 'Entered value exceeds minimum installment',
                'all_fields': 'Please provide all the data',
                'enter_startDate_day':'Please provide start date',
                'enter_startDate_month':'Please provide start month',
                'enter_startDate_year':'Please provide year',
                'investment_multiple_100':'Amount should be in multiples of Rs. 100',
                'invalid_ifsc':'Please provide valid IFSC',
                'cap_limit_info' : 'Amount cannot be more than the maximum amount.',
                'select_frequency' : 'Please select any frequency.',
                'zero_amount_error': "Enter amount greater than zero.",
                'invalid_mobileNumber' : "Please enter valid mobile number."
			},
			"sucess": {
				'email_sucess': 'You will get an email to your registered email id.',
				'investor_email_sucess': "SOA will be mailed to your investor's registered email id.",
				'mailSucess': "Mail sent successfully to your investor's registered email id"
			},
			"info": {
				'loading': 'UTI Buddy is working for you!!',
				'loading_auth': 'Please wait while signing in',
				'loading_timeout': 'Sorry! This is taking longer than usual.  We will load the data at the earliest.',
				'loading_timeout_auth': 'Sorry! This is taking longer than usual.  We will Sign you in at the earliest.',
				'loading_timeout_exit': 'Error communicating with server. Please try after sometime.',
				'logout_message': 'Are you sure you want to logout?',
				'session_expired': 'Session Expired. Please re-login to continue.',
				'not_available': 'UTIbuddy is not available to you.. please contact your RM for further queries.',
				'network_error': 'Network Error, Please check the network connection.',
				'network_error_retry': 'Oops! Network got disconnected. Please recheck and retry.',
				'server_error': 'Error communicating with server. Please try after sometime.',
				'content_notAvailable': 'Sorry! content is no longer available.',
				'device_jailbroken':'Your device is jailbroken. Do you want to continue?',
				'device_rooted':'Your device is rooted. Do you want to continue?',
				'minInvestment': "Minimum investment needs to be : ",
				'content_share_message':"-via UTI Buddy"
			},
			"staticText": {
				'expectedInterestRate':'Expected Interest Rate (%)'
			}
		})

})();

