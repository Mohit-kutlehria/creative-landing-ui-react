import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const PurposeSection = () => {
  const features = [
    {
      icon: '🔴', // Replace with icon component
      title: 'Built for impact',
      description:
        'We identify and nurture a truly diverse team of designers, developers, and marketers.',
    },
    {
      icon: '🔴', // Replace with icon component
      title: 'In sync with you',
      description:
        'We work the way you do — adapting to your workflows and rhythm for a seamless collaboration.',
    },
  ];

  return (
    <section id="about" className="w-full bg-gray-50 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start"
        >
          {/* Left Text Column */}
          <motion.div variants={fadeIn('right', 0.3)}>
            <motion.div
              variants={fadeIn('up', 0.4)}
              className="text-sm text-indigo-600 font-semibold tracking-wide mb-2"
            >
              ACHIEVE MORE
            </motion.div>
            <motion.h2
              variants={textVariant(0.5)}
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight md:w-4/5"
            >
              Purpose of a convoy is to keep your team
            </motion.h2>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="flex items-start gap-x-4 text-center md:text-left"
              >
                <motion.div
                  variants={fadeIn('right', 0.4 * (index + 1))}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-sm"
                >
                  <span className="text-2xl">{feature.icon}</span>
                </motion.div>
                <motion.div variants={fadeIn('left', 0.4 * (index + 1))}>
                  <motion.h3
                    variants={textVariant(0.3)}
                    className="text-lg md:text-xl font-semibold text-gray-900 mb-2"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    variants={fadeIn('up', 0.4)}
                    className="text-gray-600 leading-relaxed"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;
