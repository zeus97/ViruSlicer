
import '../styles/Pricing.scss'
import SectionHeader from '../components/SectionHeader'
import Price from '../components/Price'

function Pricing() {
  return (
    <section className='pricing-section' id='pricing'>
        <SectionHeader
        title='Pricing Plan'
        subtitle='OUR PRICINGS'
        text='Explore our pricing plans to find the one that best suits your needs.' />

        <div className='container d-flex justify-content-center flex-wrap'>
            <Price
            name='Free'
            price={0}
            devices={1}
            flag={false}
            featureOne='Free virus and malware scanning.'
            featureTwo='Real-time protection.'
            featureThree='Quarantine for infected files.'
            featureFour='Basic customer support.' />

            <Price
            name='Standar'
            price={19}
            devices={3}
            flag={true}
            featureOne='Advanced scanning.'
            featureTwo='Personal firewall.'
            featureThree='Secure browsing protection.'
            featureFour='24/7 customer support.' />
              
            <Price
            name='Enterprise'
            price={39}
            devices='Unlimited'
            flag={false}
            featureOne='Advanced threat analysis.'
            featureTwo='Centralized management.'
            featureThree='Automatic updates.'
            featureFour='Dedicated customer support.' />
        </div>
    </section>
  )
}

export default Pricing