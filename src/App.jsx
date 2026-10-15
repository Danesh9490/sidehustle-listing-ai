import { useState } from "react";
import "./style.css";

const initialForm = {
  product: "",
  audience: "",
  features: "",
  tone: "Professional",
  platform: "General online store"
};

export default function App() {
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function generateListing(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setCopyMessage("");
    setResult(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL || ""}/api/generate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not generate your listing.");
      }

      setResult(data);
    } catch (err) {
      setError(
        err.message ||
          "Unable to connect. Please check the backend and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      setCopyMessage("Copied to clipboard!");
      setError("");
    } catch {
      setError("Copy failed. Please select the text and copy it manually.");
    }
  }

  function copyButton(text, label = "Copy") {
    return (
      <button
        className="copy-button"
        type="button"
        onClick={() => copyText(text)}
      >
        {label}
      </button>
    );
  }

  const title = result?.title || "";
  const description = result?.description || "";
  const bulletPoints = Array.isArray(result?.bulletPoints)
    ? result.bulletPoints
    : [];
  const keywords = Array.isArray(result?.keywords)
    ? result.keywords
    : [];

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#">
          <span className="brand-mark">S</span>
          <span>
            SideHustle<span className="brand-accent"> AI</span>
          </span>
        </a>
        <span className="topbar-label">AI LISTING STUDIO</span>
      </header>

      <section className="hero">
        <p className="eyebrow">YOUR NEXT SALE STARTS HERE</p>
        <h1>
          Turn product details into <span>better listings.</span>
        </h1>
        <p className="hero-copy">
          Create compelling product titles, descriptions, and selling points
          with AI — so you can spend more time growing your business.
        </p>
      </section>

      <section className="workspace">
        <form className="form-panel" onSubmit={generateListing}>
          <div className="section-heading">
            <span className="step-number">01</span>
            <div>
              <h2>Tell us about your product</h2>
              <p>A few details are all we need to get started.</p>
            </div>
          </div>

          <label htmlFor="product">Product name *</label>
          <input
            id="product"
            name="product"
            value={form.product}
            onChange={updateField}
            placeholder="e.g. Handmade ceramic coffee mug"
            required
            maxLength={160}
          />

          <label htmlFor="audience">Target audience</label>
          <input
            id="audience"
            name="audience"
            value={form.audience}
            onChange={updateField}
            placeholder="e.g. Coffee lovers, gift shoppers"
            maxLength={200}
          />

          <label htmlFor="features">Features and benefits *</label>
          <textarea
            id="features"
            name="features"
            value={form.features}
            onChange={updateField}
            placeholder="Materials, size, special features, what makes it useful..."
            rows={5}
            required
            maxLength={2000}
          />

          <div className="field-row">
            <div>
              <label htmlFor="tone">Writing style</label>
              <select
                id="tone"
                name="tone"
                value={form.tone}
                onChange={updateField}
              >
                <option>Professional</option>
                <option>Friendly</option>
                <option>Luxury</option>
                <option>Playful</option>
                <option>Minimal</option>
              </select>
            </div>

            <div>
              <label htmlFor="platform">Selling platform</label>
              <select
                id="platform"
                name="platform"
                value={form.platform}
                onChange={updateField}
              >
                <option>General online store</option>
                <option>Amazon</option>
                <option>Etsy</option>
                <option>Shopify</option>
                <option>Social media</option>
              </select>
            </div>
          </div>

          <button
            className="generate-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating your listing..." : "✦ Generate my listing"}
          </button>

          <p className="form-note">
            AI-generated content should be reviewed for accuracy before
            publishing.
          </p>

          {error && (
            <p className="error-message" role="alert">
              {error}
            </p>
          )}
        </form>

        <section className="result-panel" aria-live="polite">
          <div className="section-heading">
            <span className="step-number">02</span>
            <div>
              <h2>Your listing</h2>
              <p>Ready for you to review and refine.</p>
            </div>
          </div>

          {!result && !loading && (
            <div className="empty-state">
              <div className="empty-icon">✧</div>
              <h3>Your next great listing starts here.</h3>
              <p>
                Complete the product details and generate your first listing.
                Your title, description, and selling points will appear here.
              </p>
              <div className="preview-tags">
                <span>Product title</span>
                <span>Description</span>
                <span>Key benefits</span>
              </div>
            </div>
          )}

          {loading && (
            <div className="empty-state">
              <div className="empty-icon spinning">✦</div>
              <h3>Crafting your listing...</h3>
              <p>
                Our AI is turning your product details into polished copy.
              </p>
            </div>
          )}

          {result && (
            <div className="generated-content">
              {copyMessage && (
                <p className="form-note" role="status">
                  {copyMessage}
                </p>
              )}

              {title && (
                <div className="output-section">
                  <div className="output-heading">
                    <h3>PRODUCT TITLE</h3>
                    {copyButton(title)}
                  </div>
                  <p>{title}</p>
                </div>
              )}

              {description && (
                <div className="output-section">
                  <div className="output-heading">
                    <h3>PRODUCT DESCRIPTION</h3>
                    {copyButton(description)}
                  </div>
                  <p>{description}</p>
                </div>
              )}

              {bulletPoints.length > 0 && (
                <div className="output-section">
                  <div className="output-heading">
                    <h3>KEY SELLING POINTS</h3>
                    {copyButton(bulletPoints.join("\n"), "Copy points")}
                  </div>
                  <ul>
                    {bulletPoints.map((point, index) => (
                      <li key={`${index}-${point}`}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {keywords.length > 0 && (
                <div className="output-section">
                  <div className="output-heading">
                    <h3>SEARCH KEYWORDS</h3>
                    {copyButton(keywords.join(", "), "Copy keywords")}
                  </div>
                  <p>{keywords.join(", ")}</p>
                </div>
              )}

              {!title && !description && !bulletPoints.length && !keywords.length && (
                <div className="error-message">
                  The AI returned no listing fields. Please try generating
                  the listing again.
                </div>
              )}

              <button
                className="generate-button"
                type="button"
                onClick={() =>
                  copyText(
                    [
                      title && `PRODUCT TITLE\n${title}`,
                      description && `DESCRIPTION\n${description}`,
                      bulletPoints.length &&
                        `KEY SELLING POINTS\n${bulletPoints
                          .map((point) => `- ${point}`)
                          .join("\n")}`,
                      keywords.length && `KEYWORDS\n${keywords.join(", ")}`
                    ]
                      .filter(Boolean)
                      .join("\n\n")
                  )
                }
              >
                Copy complete listing
              </button>
            </div>
          )}
        </section>
      </section>

      <footer className="footer">
        <span>SideHustle AI · Built for independent sellers</span>
        <span>AI-assisted copy · Review before publishing</span>
      </footer>
    </main>
  );
}
