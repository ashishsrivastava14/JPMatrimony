import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { profileService } from '../../services/profileService';
import { toast } from 'react-toastify';
import './ProfileCreate.css';

const ProfileCreate = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    age: '',
    height: '',
    weight: '',
    maritalStatus: '',
    motherTongue: '',
    physicalStatus: 'Normal',
    
    // Religious Background
    religion: '',
    caste: '',
    subCaste: '',
    
    // Location
    country: 'India',
    state: '',
    city: '',
    
    // Education & Career
    education: '',
    educationDetail: '',
    profession: '',
    professionDetail: '',
    income: '',
    
    // Family Details
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    siblings: '',
    familyType: '',
    familyValues: '',
    
    // About
    about: '',
    hobbies: '',
    expectations: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    setStep(prev => Math.min(5, prev + 1));
  };

  const handlePrev = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await profileService.createProfile(formData);
      toast.success('Profile created successfully!');
      navigate('/my-profile');
    } catch (error) {
      toast.error('Failed to create profile');
    }
  };

  return (
    <div className="profile-create-page">
      <div className="container">
        <div className="create-container">
          <div className="create-header">
            <h1>Create Your Profile</h1>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(step / 5) * 100}%` }}></div>
            </div>
            <div className="step-indicator">
              Step {step} of 5
            </div>
          </div>

          <form onSubmit={handleSubmit} className="create-form">
            {step === 1 && (
              <div className="form-step">
                <h2>Personal Details</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Age *</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Height *</label>
                    <select name="height" value={formData.height} onChange={handleChange} required>
                      <option value="">Select</option>
                      {["4'6\"", "4'7\"", "4'8\"", "4'9\"", "4'10\"", "4'11\"", "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"", "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\""].map(h => (
                        <option key={h} value={h}>{h}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Weight</label>
                    <input type="text" name="weight" value={formData.weight} onChange={handleChange} placeholder="e.g., 60 kg" />
                  </div>
                  <div className="form-group">
                    <label>Marital Status *</label>
                    <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
                      <option value="">Select</option>
                      <option value="Never Married">Never Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Widowed">Widowed</option>
                      <option value="Awaiting Divorce">Awaiting Divorce</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Mother Tongue *</label>
                    <input type="text" name="motherTongue" value={formData.motherTongue} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Physical Status</label>
                    <select name="physicalStatus" value={formData.physicalStatus} onChange={handleChange}>
                      <option value="Normal">Normal</option>
                      <option value="Physically Challenged">Physically Challenged</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <h2>Religious & Location</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Religion *</label>
                    <select name="religion" value={formData.religion} onChange={handleChange} required>
                      <option value="">Select</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Muslim">Muslim</option>
                      <option value="Christian">Christian</option>
                      <option value="Sikh">Sikh</option>
                      <option value="Buddhist">Buddhist</option>
                      <option value="Jain">Jain</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Caste</label>
                    <input type="text" name="caste" value={formData.caste} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Sub Caste</label>
                    <input type="text" name="subCaste" value={formData.subCaste} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Country *</label>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>State *</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>City *</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <h2>Education & Career</h2>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label>Education *</label>
                    <select name="education" value={formData.education} onChange={handleChange} required>
                      <option value="">Select</option>
                      <option value="High School">High School</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Bachelor's">Bachelor's Degree</option>
                      <option value="Master's">Master's Degree</option>
                      <option value="PhD">PhD</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label>Education Details</label>
                    <input type="text" name="educationDetail" value={formData.educationDetail} onChange={handleChange} placeholder="e.g., B.Tech in Computer Science" />
                  </div>
                  <div className="form-group">
                    <label>Profession *</label>
                    <input type="text" name="profession" value={formData.profession} onChange={handleChange} required placeholder="e.g., Software Engineer" />
                  </div>
                  <div className="form-group">
                    <label>Profession Details</label>
                    <input type="text" name="professionDetail" value={formData.professionDetail} onChange={handleChange} placeholder="e.g., Working at TCS" />
                  </div>
                  <div className="form-group">
                    <label>Annual Income</label>
                    <select name="income" value={formData.income} onChange={handleChange}>
                      <option value="">Select</option>
                      <option value="Less than 2 Lakhs">Less than ₹2 Lakhs</option>
                      <option value="2-5 Lakhs">₹2-5 Lakhs</option>
                      <option value="5-10 Lakhs">₹5-10 Lakhs</option>
                      <option value="10-15 Lakhs">₹10-15 Lakhs</option>
                      <option value="15-20 Lakhs">₹15-20 Lakhs</option>
                      <option value="20+ Lakhs">₹20+ Lakhs</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="form-step">
                <h2>Family Details</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Father's Name</label>
                    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Father's Occupation</label>
                    <input type="text" name="fatherOccupation" value={formData.fatherOccupation} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Mother's Name</label>
                    <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Mother's Occupation</label>
                    <input type="text" name="motherOccupation" value={formData.motherOccupation} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Siblings</label>
                    <input type="text" name="siblings" value={formData.siblings} onChange={handleChange} placeholder="e.g., 1 Brother, 1 Sister" />
                  </div>
                  <div className="form-group">
                    <label>Family Type</label>
                    <select name="familyType" value={formData.familyType} onChange={handleChange}>
                      <option value="">Select</option>
                      <option value="Joint Family">Joint Family</option>
                      <option value="Nuclear Family">Nuclear Family</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label>Family Values</label>
                    <select name="familyValues" value={formData.familyValues} onChange={handleChange}>
                      <option value="">Select</option>
                      <option value="Traditional">Traditional</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Liberal">Liberal</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="form-step">
                <h2>About & Preferences</h2>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label>About Yourself *</label>
                    <textarea name="about" value={formData.about} onChange={handleChange} rows="5" required placeholder="Tell us about yourself..." />
                  </div>
                  <div className="form-group full-width">
                    <label>Hobbies & Interests</label>
                    <textarea name="hobbies" value={formData.hobbies} onChange={handleChange} rows="3" placeholder="Your hobbies and interests..." />
                  </div>
                  <div className="form-group full-width">
                    <label>Partner Expectations</label>
                    <textarea name="expectations" value={formData.expectations} onChange={handleChange} rows="5" placeholder="What are you looking for in a partner..." />
                  </div>
                </div>
              </div>
            )}

            <div className="form-actions">
              {step > 1 && (
                <button type="button" onClick={handlePrev} className="btn-prev">
                  Previous
                </button>
              )}
              {step < 5 ? (
                <button type="button" onClick={handleNext} className="btn-next">
                  Next
                </button>
              ) : (
                <button type="submit" className="btn-submit">
                  Create Profile
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreate;
