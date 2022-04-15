import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../../redux/actions/registerActions';
import Loader from '../../../components/Loader';
import * as yup from 'yup';
import {useFormik} from 'formik';

const validationSchema = yup.object({
  username: yup
    .string()
    .matches(/[@]{1}/, 'incorrectUsername')
    .required('required'),
  password: yup.string().required('required'),
});

const UserRegistration = ({navigation}) => {
  const dispatch = useDispatch();
  const {isRegistrationSucess} = useSelector(state => state.registerReducer);
  const emailInputRef = createRef();
  const passwordInputRef = createRef();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      dispatch(
        register({username: values.username, password: values.password}),
      );
    },
  });

  const onSetUsername = value => {
    formik.setFieldValue('username', value, true);
  };

  const onSetPassword = value => {
    formik.setFieldValue('password', value, true);
  };

  const onHandleregistration = () => {
    formik.submitForm();
  };

  if (isRegistrationSucess) {
    navigation.navigate('UserLogin');
  }

  return (
    <View
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#f2f2f2'}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={formik.values.username}
              onChangeText={UserEmail => onSetUsername(UserEmail)}
              placeholder="Enter Email" //dummy@abc.com
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          {formik.errors.username ? (
            <Text style={styles.errorTextStyle}>
              {formik.errors.username === 'incorrectUsername'
                ? 'incorrent username, please try again.'
                : 'username required.'}
            </Text>
          ) : null}

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={formik.values.password}
              onChangeText={UserPassword => onSetPassword(UserPassword)}
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              blurOnSubmit={false}
            />
          </View>
          {formik.errors.password ? (
            <Text style={styles.errorTextStyle}>{'incorrent username'}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => {
              onHandleregistration();
            }}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default UserRegistration;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#0080FF',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: '#0080FF',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'green',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
