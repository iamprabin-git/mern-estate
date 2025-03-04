import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Social() {
  return (
    <div>
        <h3 className="text-xl font-bold mb-4 text-center">Social Media</h3>
              <div className="flex space-x-4">
                <button className='bg-blue-700 w-40 h-20 rounded-lg text-white text-2xl gap-2 items-center flex p-4'> Facebook
                <a href="https://www.facebook.com/profile.php?id=61572970565111" target="_blank"
                  rel="noopener noreferrer">
<FaFacebook className="text-white text-2xl 
                                hover:text-gray-300" />
                </a></button>
                <button className='bg-red-700 w-40 h-20 rounded-lg text-white text-2xl gap-2 items-center flex p-4'> Youtube
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2F%2540%25E0%25A4%25B8%25E0%25A4%25B8%25E0%25A5%258D%25E0%25A4%25A4%25E0%25A5%258B.%25E0%25A4%2598%25E0%25A4%25B0%25E0%25A4%259C%25E0%25A4%2597%25E0%25A5%258D%25E0%25A4%2597%25E0%25A4%25BE%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR1vZ6OKEs6HYw0MEOKA2NWBFCwIOhRx-X0PiktXKqW5kmRYgn-XTBqaq2U_aem_IrfFTmIGO_Dr1pJTS-fpuA&h=AT2tFRaWGgh9i8w6Qtv565qx5ZRnVwTmgQAzzkuhNBH3RfKtoB0D0IebE1Du2tYVdhJNKkBz3fUFa2NGc8h28TfIWLBZa_YAJdGGcaDFSz6v4E1t1E2Lbh2QPlGX0nQHnppJ" target="_blank"
                  rel="noopener noreferrer">
                  <FaYoutube className="text-white text-2xl
                                hover:text-gray-300" />
                </a>
                </button>
                <button className='bg-red-900 w-40 h-20 rounded-lg text-white text-2xl gap-2 items-center flex p-4'> Instagram
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Flelesastogharjagga%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR2OlFv2VMzm70nuLQxbCzOew0VQ3-FjrxyySLjBEqMnc6qFnpuq77wANBw_aem_cFp03jhpkjriOxEepwRtOw&h=AT1ru-LdG9Dl3wXBzOzOkbWfaOHYKCFSHpQSwTWUpR-X0OZj00ybSnXzfn5VAJoydxzCbWwJR_chsMRWuM9WUjUW9q5OqCiLQThPDeiZ76BQjWRm5TwpfDZixHYJJLqAv8EZ" target="_blank"
                  rel="noopener noreferrer">
                  <FaInstagram className="text-white text-2xl
                                hover:text-gray-300" />
                </a></button>
                <button className='bg-red-950 w-40 h-20 rounded-lg text-white text-2xl gap-2 items-center flex p-7'> TikTok
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftiktok.com%2F%40lele.sasto.gharja%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR0VSs8K35ZpcXMngluQaJm0AhIOK3VeBwk9Ch6VrelkHc-v0LyvzsWnN-0_aem_TUDavzc_B1vLwM9MspanrA&h=AT23vPCA5YpfbDeYuqOIJHLxoDwcVhZylR3P0mIxx6WvzGmfCj8YOkQZexRDMz-LBoAJ1ebCQukZETUdNsUVNThtmE0CewBebXlnmXLvZhMdr-aqRPxDXwx53yMhiOuP4e1t" target="_blank"
                  rel="noopener noreferrer">
                  <FaTiktok className="text-white text-2xl
                                hover:text-gray-300" />
                </a></button>
              </div>
              </div>
  )
}
