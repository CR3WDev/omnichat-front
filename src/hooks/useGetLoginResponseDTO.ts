interface LoginResponseDTO {
  token: string,
  lawyerId: string,
  userId: string,
  role: string
}

export const useGetLoginResponseDTO = (): LoginResponseDTO | undefined => {
  const loginResponseDTOStringfy = sessionStorage.getItem('LoginResponseDTO')
  if (!loginResponseDTOStringfy) return undefined
  try {
    return JSON.parse(loginResponseDTOStringfy)
  } catch (error) {
    console.error('Failed to parse JSON string:', loginResponseDTOStringfy, 'Error:', error);
    throw error;
  }
}

export const useSetLoginResponseDTO = (loginResponseDTO: LoginResponseDTO) => {
  const loginResponseDTOStringfy = JSON.stringify(loginResponseDTO)
  if (!loginResponseDTOStringfy) return undefined
  sessionStorage.setItem('LoginResponseDTO', loginResponseDTOStringfy)
}
