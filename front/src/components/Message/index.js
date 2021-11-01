import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

async function Message(message, type){

  switch (type) {
    case 'success':
      toast.success(message);
    break;
    case 'error':
      toast.error(message);
    break;
    case 'info':
      toast.info(message);
    break;
    case 'warn':
      toast.warn(message);
    break;

    default:
      toast(message);
    break;
  }
}

export default Message;