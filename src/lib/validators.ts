export const validateLead = (form: {
  name: string;
  email: string;
  phone: string;
}) => {
  if (!form.name.trim()) return "Vui lòng nhập họ tên";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) return "Email không hợp lệ";

  const phoneRegex = /^[0-9]{10}$/;
  if (form.phone && !phoneRegex.test(form.phone))
    return "Số điện thoại không hợp lệ";

  return null;
};