import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type LegalType = 'privacy' | 'refund' | 'terms';

interface LegalModalProps {
  type: LegalType | null;
  isOpen: boolean;
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ type, isOpen, onClose }) => {
  
  const getContent = () => {
    switch (type) {
      case 'privacy':
        return (
          <div className="space-y-10 text-gray-300 text-base leading-7 font-normal tracking-wide">
             <div>
                <h3 className="text-2xl font-serif text-white mb-3">1. Introduction</h3>
                <p>This Privacy Policy explains how Faiz Ehsan (“we,” “us,” or “our”) collects, uses, and protects your personal information when you visit faizehsan.com or purchase our digital products. We are committed to protecting your privacy and handling your data transparently. By using our website or purchasing our products, you consent to the practices described in this policy.</p>
             </div>
             
             <div>
                <h3 className="text-2xl font-serif text-white mb-3">2. Information We Collect</h3>
                <h4 className="font-semibold text-white mb-2 text-lg">Information You Provide</h4>
                <p className="mb-3">When you make a purchase or interact with our website, we may collect:</p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-400">
                    <li><strong className="text-white">Name:</strong> To identify you as a customer and personalize communications</li>
                    <li><strong className="text-white">Email Address:</strong> To deliver your purchased products, send order confirmations, and communicate with you about your purchases</li>
                </ul>
                <h4 className="font-semibold text-white mb-2 text-lg">Information Collected Automatically</h4>
                <p className="mb-3">When you visit our website, certain information may be collected automatically:</p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-400">
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website</li>
                    <li>General geographic location (country/region)</li>
                </ul>
                <p className="italic text-gray-500">This information is collected through standard web technologies and analytics tools to help us improve our website and understand how visitors use it.</p>
                
                <h4 className="font-semibold text-white mt-6 mb-2 text-lg">Payment Information</h4>
                <p>We use Dodo Payments to process transactions. We do not collect, store, or have access to your payment card details. All payment information is handled directly by Dodo Payments in accordance with their privacy policy and security standards.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">3. How We Use Your Information</h3>
                <p className="mb-3">We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li><strong className="text-white">Order Fulfillment:</strong> To process your purchases and deliver digital products to you</li>
                    <li><strong className="text-white">Customer Communication:</strong> To respond to your inquiries, provide customer support, and send order-related notifications</li>
                    <li><strong className="text-white">Email Marketing:</strong> To send you newsletters, product updates, promotions, and other marketing communications (with your consent)</li>
                    <li><strong className="text-white">Website Improvement:</strong> To analyze website usage patterns and improve our content and user experience</li>
                    <li><strong className="text-white">Legal Compliance:</strong> To comply with applicable laws and respond to legal requests</li>
                </ul>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">4. Email Marketing</h3>
                <p className="mb-3">We use your email address to send marketing communications including:</p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-400">
                    <li>New product announcements</li>
                    <li>Promotional offers and discounts</li>
                    <li>Tips, tutorials, and content related to our products</li>
                    <li>Company news and updates</li>
                </ul>
                <h4 className="font-semibold text-white mb-2 text-lg">Your Rights:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>You can unsubscribe from marketing emails at any time by clicking the “unsubscribe” link at the bottom of any marketing email</li>
                    <li>Unsubscribing from marketing emails will not affect transactional emails related to your purchases</li>
                    <li>If you wish to unsubscribe, you can also contact us directly at faizehsan1234@gmail.com</li>
                </ul>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">5. How We Share Your Information</h3>
                <p className="mb-3">We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li><strong className="text-white">Payment Processors:</strong> Dodo Payments processes your payment transactions. They receive only the information necessary to complete your purchase.</li>
                    <li><strong className="text-white">Service Providers:</strong> We may use third-party services for email delivery, analytics, and website hosting. These providers only access your information as needed to perform their services and are obligated to protect your data.</li>
                    <li><strong className="text-white">Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal requests from public authorities.</li>
                </ul>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">6. Data Security</h3>
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                <p className="mt-2 text-gray-500">However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">7. Data Retention</h3>
                <p className="mb-3">We retain your personal information for as long as necessary to:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>Provide you with our products and services</li>
                    <li>Fulfill the purposes outlined in this policy</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes and enforce our agreements</li>
                </ul>
                <p className="mt-3">If you request deletion of your data, we will remove your information from our active databases, subject to any legal retention requirements.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">8. Your Rights</h3>
                <p className="mb-3">Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong className="text-white">Correction:</strong> Request correction of inaccurate personal information</li>
                    <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                </ul>
                <p className="mt-3">To exercise any of these rights, please contact us at faizehsan1234@gmail.com.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">9. Cookies and Tracking Technologies</h3>
                <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect analytics data.</p>
                <p className="mt-2 mb-2 font-medium">Cookies are small text files stored on your device that help us:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>Remember your preferences</li>
                    <li>Understand how you interact with our website</li>
                    <li>Improve our website functionality</li>
                </ul>
                <p className="mt-3 text-gray-500">You can control cookies through your browser settings. Note that disabling cookies may affect some website functionality.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">10. Third-Party Links</h3>
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">11. Children’s Privacy</h3>
                <p>Our website and products are not intended for children under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">12. International Users</h3>
                <p>If you are accessing our website from outside India, please be aware that your information may be transferred to, stored, and processed in India where our servers are located. By using our website, you consent to this transfer.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">13. Changes to This Policy</h3>
                <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated “Last Updated” date. We encourage you to review this policy periodically. Continued use of our website after any changes constitutes your acceptance of the revised policy.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">14. Contact Us</h3>
                <p className="mb-3">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="mb-2"><strong className="text-white">Email:</strong> faizehsan1234@gmail.com</p>
                    <p><strong className="text-white">Website:</strong> faizehsan.com</p>
                </div>
                <p className="mt-6 italic text-sm text-gray-500">By using faizehsan.com, you acknowledge that you have read and understood this Privacy Policy.</p>
             </div>
          </div>
        );
      case 'refund':
        return (
          <div className="space-y-10 text-gray-300 text-base leading-7 font-normal tracking-wide">
             <div>
                <h3 className="text-2xl font-serif text-white mb-3">Overview</h3>
                <p>This Refund Policy applies to all digital products sold by Faiz Ehsan (“we,” “us,” or “our”) through faizehsan.com, including but not limited to prompt packs, color grade LUTs, presets, and other downloadable digital content.</p>
             </div>
             
             <div className="bg-red-900/20 p-8 rounded-3xl border border-red-900/30">
                <h3 className="text-2xl font-serif text-red-400 mb-3">No Refunds on Digital Products</h3>
                <p className="mb-4 text-red-300/80 font-medium">Due to the nature of digital products, <strong>all sales are final</strong>. Once a purchase is completed and the digital product is delivered, no refunds, exchanges, or credits will be issued.</p>
                <p className="mb-2 text-red-300/70 text-sm font-semibold uppercase tracking-wider">Why this policy?</p>
                <ul className="list-disc pl-5 space-y-2 text-red-300/80">
                    <li>Digital products are delivered instantly and cannot be “returned” once downloaded or accessed</li>
                    <li>The full product is made available immediately upon purchase</li>
                    <li>There is no way to verify that a product has been deleted after a refund</li>
                </ul>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">What You Receive</h3>
                <p>Before purchasing, please review the product description, preview images, and any sample content carefully. Each product listing includes detailed information about what is included in your purchase.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">Technical Issues</h3>
                <p className="mb-3">If you experience technical difficulties downloading or accessing your purchased product, please contact us at faizehsan1234@gmail.com within 7 days of purchase. We will work with you to resolve the issue and ensure you receive access to your purchase.</p>
                <p className="mb-2 font-medium">Technical support includes:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>Re-sending download links if they have expired</li>
                    <li>Providing alternative download methods if needed</li>
                    <li>Troubleshooting compatibility issues where possible</li>
                </ul>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">Exceptions</h3>
                <p className="mb-3">We may consider exceptions to this policy only in the following circumstances:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>You were charged multiple times for the same product due to a payment processing error</li>
                    <li>The product delivered is substantially different from what was described on the product page</li>
                    <li>The download files are corrupted and we are unable to provide a working replacement</li>
                </ul>
                <p className="mt-4 p-4 bg-white/5 rounded-xl text-sm border border-white/10 text-gray-400">In such cases, please contact us within 7 days of purchase with details of the issue. Each case will be reviewed individually at our sole discretion.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">Before You Purchase</h3>
                <p className="mb-2">We encourage you to:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>Read the full product description carefully</li>
                    <li>Review any preview images or sample content</li>
                    <li>Check system requirements or compatibility information</li>
                    <li>Contact us with any questions before completing your purchase</li>
                </ul>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">Contact Us</h3>
                <p className="mb-3">If you have questions about this Refund Policy or need assistance with your purchase, please contact us:</p>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="mb-2"><strong className="text-white">Email:</strong> faizehsan1234@gmail.com</p>
                    <p><strong className="text-white">Website:</strong> faizehsan.com</p>
                </div>
                <p className="mt-6 italic text-sm text-gray-500">By completing a purchase on faizehsan.com, you acknowledge that you have read, understood, and agree to this Refund Policy.</p>
             </div>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-10 text-gray-300 text-base leading-7 font-normal tracking-wide">
             <div>
                <h3 className="text-2xl font-serif text-white mb-3">1. Introduction</h3>
                <p>Welcome to faizehsan.com. These Terms of Service (“Terms”) govern your access to and use of our website and the purchase of digital products offered by Faiz Ehsan (“we,” “us,” or “our”). By accessing our website or purchasing any digital products, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or purchase our products.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">2. Products and Services</h3>
                <p className="mb-3">We sell digital products including, but not limited to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-3 text-gray-400">
                    <li>AI prompt packs</li>
                    <li>Color grade LUTs</li>
                    <li>Presets</li>
                    <li>Digital templates</li>
                    <li>Other downloadable digital content</li>
                </ul>
                <p className="italic text-gray-500">All products are delivered electronically via instant download links upon successful payment.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">3. License Grant</h3>
                <p className="mb-4">Upon completing a purchase, we grant you a non-exclusive, non-transferable license to use the digital product(s) subject to the following terms:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-900/20 p-6 rounded-2xl border border-green-900/30">
                        <h4 className="font-semibold text-green-400 mb-3 text-lg flex items-center gap-2">Permitted Uses</h4>
                        <ul className="list-disc pl-5 space-y-2 text-green-300/80 text-sm">
                            <li>Personal projects (non-commercial)</li>
                            <li>Commercial projects including client work, YouTube videos, social media content, film projects</li>
                            <li>Modification of the products for use in your own projects</li>
                        </ul>
                    </div>

                    <div className="bg-red-900/20 p-6 rounded-2xl border border-red-900/30">
                        <h4 className="font-semibold text-red-400 mb-3 text-lg flex items-center gap-2">Prohibited Uses</h4>
                        <ul className="list-disc pl-5 space-y-2 text-red-300/80 text-sm">
                            <li>Reselling, redistributing, or sharing the original product files</li>
                            <li>Claiming ownership or authorship of the original product files</li>
                            <li>Including the products in any competing product or template pack</li>
                            <li>Sublicensing or transferring your license</li>
                        </ul>
                    </div>
                </div>
                <p className="mt-4 text-sm text-gray-500">The license is granted to the individual purchaser only. Each user must purchase their own license.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">4. Intellectual Property</h3>
                <p>All digital products, including their design, structure, and content, are the intellectual property of Faiz Ehsan and are protected by applicable intellectual property laws. Purchasing a product grants you a license to use the product as described above. It does not transfer ownership of the intellectual property to you.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">5. Payment and Delivery</h3>
                <p className="mb-3">Payments are processed securely through Dodo Payments. We do not store your payment card details.</p>
                <p className="mb-2 font-medium">Upon successful payment:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>You will receive instant access to download your purchased products</li>
                    <li>Download links are delivered via email and/or the payment confirmation page</li>
                    <li>Download links may expire after a specified period; please download your products promptly</li>
                </ul>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">6. Refund Policy</h3>
                <p>Due to the digital nature of our products, all sales are final. No refunds will be issued once a purchase is completed and the product is delivered. Please refer to our separate Refund Policy for complete details.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">7. User Responsibilities</h3>
                <p className="mb-3">By using our website and products, you agree to:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>Provide accurate information when making purchases</li>
                    <li>Use the products only as permitted under these Terms</li>
                    <li>Not attempt to circumvent any technical measures we use to protect our products</li>
                    <li>Not use our products for any unlawful purpose</li>
                </ul>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">8. Disclaimer of Warranties</h3>
                <p className="mb-3">Our products are provided “as is” and “as available” without warranties of any kind, either express or implied. We do not warrant that:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>The products will meet your specific requirements</li>
                    <li>The products will be compatible with all software or hardware</li>
                    <li>The results obtained from using the products will be accurate or reliable</li>
                </ul>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">9. Limitation of Liability</h3>
                <p className="mb-3">To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our products or website.</p>
                <p className="p-4 bg-white/5 rounded-xl text-sm border border-white/10 text-gray-400">Our total liability for any claim arising from your purchase shall not exceed the amount you paid for the specific product giving rise to the claim.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">10. Indemnification</h3>
                <p>You agree to indemnify and hold harmless Faiz Ehsan from any claims, damages, losses, or expenses arising from your violation of these Terms or your misuse of our products.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">11. Changes to Terms</h3>
                <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website or products after any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">12. Governing Law</h3>
                <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in India.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">13. Severability</h3>
                <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-3">14. Contact Information</h3>
                <p className="mb-3">If you have any questions about these Terms, please contact us:</p>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="mb-2"><strong className="text-white">Email:</strong> faizehsan1234@gmail.com</p>
                    <p><strong className="text-white">Website:</strong> faizehsan.com</p>
                </div>
                <p className="mt-6 italic text-sm text-gray-500">By using faizehsan.com or purchasing any products, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
             </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (type) {
        case 'privacy': return 'Privacy Policy';
        case 'refund': return 'Refund Policy';
        case 'terms': return 'Terms of Service';
        default: return '';
    }
  };

  const getDate = () => "Effective Date: February 2, 2026";

  return (
    <AnimatePresence>
      {isOpen && type && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
            className="relative w-full max-w-3xl bg-[#1C1C1E] rounded-[2.5rem] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-8 border-b border-white/5 bg-[#1C1C1E]/95 backdrop-blur-sm z-10 sticky top-0">
                <div>
                    <h2 className="text-4xl font-serif text-white tracking-tight">{getTitle()}</h2>
                    <p className="text-sm text-gray-400 font-medium mt-2 tracking-wide uppercase">{getDate()}</p>
                </div>
                <button 
                    onClick={onClose}
                    className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
                >
                    <X size={22} />
                </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto px-8 py-10 no-scrollbar bg-[#1C1C1E]">
                {getContent()}
            </div>

            {/* Subtle fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#1C1C1E] to-transparent pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;