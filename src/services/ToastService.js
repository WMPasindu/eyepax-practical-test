import Toast from 'react-native-toast-message';

const ToastService = ({title, message, type = 'success'}) => {
  Toast.show({
    type,
    text1: title,
    text2: message,
  });
};

export default ToastService;
