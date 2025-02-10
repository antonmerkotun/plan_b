import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useModal } from '@/context/ModalContext.jsx';
import Button from '@/components/ui/Button/Button.jsx';
import closeIcon from '@/assets/icons/x-cirlce.svg';
import styles from '@/components/ui/Forms/Community/Community.module.scss';

const interests = [
  'DeFi',
  'Gaming',
  'Art & Culture',
  'Development',
  'Events',
  'Venture Capital',
  'Enterprise',
  'Policy',
  'Other',
];

const Community = () => {
  const { closeModal } = useModal();

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    country: '',
    interests: [],
    agreeMarketing: false,
    agreePrivacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'interests') {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((interest) => interest !== value),
      }));
    } else if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <form
        className={styles.communityForm}
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.top}>
          <h2 className={styles.title}>Join to the community</h2>
          <ReactSVG src={closeIcon} onClick={closeModal} />
        </div>
        <div>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Main information</h4>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className={styles.input}
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name or Pseudonym"
              className={styles.input}
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={styles.input}
            >
              <option value="none">Country</option>
            </select>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Interests</h4>
            <div className={styles.checkboxGrid}>
              {interests.map((interest) => (
                <label key={interest} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleChange}
                  />
                  {interest}
                </label>
              ))}
            </div>
          </div>
          <div className={styles.section}>
            <h4 className={styles.titleSuccess}>
              By checking the box below, you agree to receive marketing emails
              from the Avalanche Foundation.
            </h4>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="agreeMarketing"
                checked={formData.agreeMarketing}
                onChange={handleChange}
              />
              I agree to receive marketing emails from The Plan B Chain.
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="agreePrivacy"
                checked={formData.agreePrivacy}
                onChange={handleChange}
                required
              />
              I have reviewed the privacy policy and agree to allow The Plan B
              Chain to store and process my personal data.
            </label>
          </div>
        </div>

        <Button className={styles.subscribeBtn} name="Subscribe" />
      </form>
    </div>
  );
};

export default Community;
