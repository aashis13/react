import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", phoneno: "" });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  function validate({ name, email, phoneno }) {
    const err = {};
    if (!name) err.name = "Name required";
    if (!email || !/\S+@\S+\.\S+/.test(email))
      err.email = "Valid email required";
    if (!phoneno || !/^\d{10}$/.test(phoneno))
      err.phoneno = "Valid 10-digit phone number required";
    return err;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    setError(validate(updated));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate(form);
    setError(err);
    if (Object.keys(err).length) return;
    setLoading(true);
    setTimeout(() => {
      setResponse({ success: true, data: form });
      setLoading(false);
    }, 1000);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <div style={{ color: "red" }}>{error.name}</div>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <div style={{ color: "red" }}>{error.email}</div>
        <input
          name="phoneno"
          placeholder="Phone Number"
          value={form.phoneno}
          onChange={handleChange}
        />
        <div style={{ color: "red" }}>{error.phoneno}</div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {response && (
        <pre style={{ marginTop: 20 }}>
          <strong>Response:</strong>
          <br />
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}
