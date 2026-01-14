// import Title from '@/components/sheared/Title';
import { FetchItems } from '@/lib/FetchItems';
import { ShoppingCart, Star, User } from 'lucide-react';
import Link from 'next/link';

const Cards = async () => {
    const products = await FetchItems();

    const formatPrice = (price) => {
        return `$${parseFloat(price).toFixed(2)}`;
    };

    return (
        <div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {products?.map((product) => (
                        <div 
                            key={product._id}
                            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={product.product_image}
                                    alt={product.product_title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                
                                <div className="absolute top-3 right-3">
                                    <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg shadow">
                                        <span className="text-lg font-bold text-gray-900">
                                            {formatPrice(product.product_price)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="font-bold text-gray-900 mb-2 line-clamp-1 text-lg">
                                    {product.product_title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {product.product_description}
                                </p>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-medium">4.8</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-4 h-4 text-gray-400" />
                                            <span className="text-sm text-gray-600">
                                                {product.owner_email.split('@')[0]}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded">
                                            PBR
                                        </span>
                                        <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded">
                                            Game Ready
                                        </span>
                                        <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded">
                                            UV
                                        </span>
                                    </div>
                                </div>
                                <Link href={`/details/${product._id}`} className="py-2.5 bg-linear-to-r from-[#7c3aed] to-[#06b6d4] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
                                    <button className='w-full cursor-pointer'>View Details</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {(!products || products.length === 0) && (
                    <div className="text-center py-12">
                        <div className="w-20 h-20 mx-auto mb-4 bg-linear-to-r from-[#7c3aed]/10 to-[#06b6d4]/10 rounded-full flex items-center justify-center">
                            <ShoppingCart className="w-10 h-10 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            No Models Found
                        </h3>
                        <p className="text-gray-500 max-w-md mx-auto">
                            Check back soon for new models
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cards;