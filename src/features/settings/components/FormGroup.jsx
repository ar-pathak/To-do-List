const FormGroup = ({ label, children }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormGroup;
