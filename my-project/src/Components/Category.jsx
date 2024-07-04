import { FaLongArrowAltRight } from "react-icons/fa";




const Category = () => {
  return (
    <div className="grid grid-cols-1 m-32 md:grid-cols-2">
      {/* item 1 */}
      <div className="flex mr-6 mb-10 flex-col md:flex-row">
        <div className="mr-4">
            <img src="../../assets/icon-versions 1.png" alt="Version"    />
        </div>
        <div className="pr-6">
            <h4 className="text-4xl font-semibold">Using Abstract</h4>
            <div className="text-2xl font-normal my-4">Abstract lets you manage, version, and document your designs in one place.</div>

            <div className="flex  items-center">
                <a href="#" className="flex items-center text-lg text-blue-600 hover:underline font-extralight">
                    Learn more <FaLongArrowAltRight className="ml-1" />
                </a>
            </div>
        </div>
      </div>

      {/* item 2 */}
      <div className="flex mr-6 mb-10 flex-col md:flex-row">
        <div className="mr-8">
            <img src="../../assets/icon-account 2.png" alt=""    />
        </div>
        <div className="pr-6">
            <h4 className="text-4xl font-semibold">
            Manage your account</h4>
            <div className="text-2xl font-normal my-4 ">Configure your account settings, such as your email, profile details, and password.</div>
            <div className="flex  items-center">
                <a href="#" className="flex items-center text-lg text-blue-600 hover:underline font-extralight">
                    Learn more <FaLongArrowAltRight className="ml-1" />
                </a>
            </div>
        </div>
      </div>
      {/* item 3 */}
      <div className="flex mr-6 mb-10 flex-col md:flex-row">
        <div className="mr-8">
            <img src="../../assets/icon-organizations 2.png" alt=""    />
        </div>
        <div className="pr-6">
            <h4 className="text-4xl font-semibold">Manage organizations, teams, and projects</h4>
            <div className="text-2xl font-normal my-4">Use Abstract organizations, teams, and projects to organize your people and your work.</div>
            <div className="flex  items-center">
                <a href="#" className="flex items-center text-lg text-blue-600 hover:underline font-extralight">
                    Learn more <FaLongArrowAltRight className="ml-1" />
                </a>
            </div>
        </div>
      </div>
      {/* item 4 */}
      <div className="flex mr-6 mb-10 flex-col md:flex-row">
        <div className="mr-4">
            <img src="../../assets/icon-billing 4.png" alt=""  className="w-[150px]"/>
        </div>
        <div className="pr-6">
            <h4 className="text-4xl font-semibold">Manage billing</h4>
            <div className="text-2xl font-normal my-4">Change subscriptions and payment details.</div>
            <div className="flex  items-center">
                <a href="#" className="flex items-center text-lg text-blue-600 hover:underline font-extralight">
                    Learn more <FaLongArrowAltRight className="ml-1" />
                </a>
            </div>
        </div>
      </div>
      {/* item 5 */}
      <div className="flex mr-6 mb-10 flex-col md:flex-row">
        <div className="mr-4">
            <img src="../../assets/icon-authenticate 5.png" alt=""   />
        </div>
        <div className="pr-6">
            <h4 className="text-4xl font-semibold">Authenticate to Abstract</h4>
            <div className="text-2xl font-normal my-4">Set up and configure SSO, SCIM, and Just-in-Time provisioning.</div>
            <div className="flex  items-center">
                <a href="#" className="flex items-center text-lg text-blue-600 hover:underline font-extralight">
                    Learn more <FaLongArrowAltRight className="ml-1" />
                </a>
            </div>
        </div>
      </div>
      {/* item 6 */}
      <div className="flex mr-6 mb-10 flex-col md:flex-row">
        <div className="mr-8">
            <img src="../../assets/icon-comment 6.png" alt=""  className="w-[100px]"  />
        </div>
        <div className="pr-6">
            <h4 className="text-4xl font-semibold">Abstract support</h4>
            <div className="text-2xl font-normal my-4">Get in touch with a human.</div>
            <div className="flex  items-center">
                <a href="#" className="flex items-center text-lg text-blue-600 hover:underline font-extralight">
                    Learn more <FaLongArrowAltRight className="ml-1" />
                </a>
            </div>
        
        </div> 
      </div>
    </div>
  )
}

export default Category
