export const validateInput = (input: string | undefined) => {

  if(!input) {
    return false;
  }
  
  if(input.trim() === "" || input.trim().length === 0) {
    return false;
  }

  return true;
}
