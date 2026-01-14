import { FetchItemsId } from '@/lib/FetchItems';
import { Star, ShoppingCart, Download, Heart, CheckCircle, Calendar, User, Zap, Package, Globe, Shield } from 'lucide-react';

const ProductDetails = async ({ params }) => {
    const { slug } = await params;
    const product = await FetchItemsId(slug);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">😞</div>
                    <h1 className="text-2xl font-bold text-gray-900">Product Not Found</h1>
                    <p className="text-gray-600 mt-2">The requested 3D model could not be found.</p>
                </div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatPrice = (price) => {
        return `$${parseFloat(price).toFixed(2)}`;
    };

    return (
        <div>
            <div >
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                            <div className="relative aspect-square">
                                <img
                                    src={product.product_image}
                                    alt={product.product_title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-2 bg-linear-to-r from-[#7c3aed] to-[#06b6d4] text-white text-sm font-bold rounded-full shadow-lg">
                                        PREMIUM
                                    </span>
                                </div>
                                <button className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                    <Heart className="w-6 h-6 text-gray-700" />
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button className="flex-1 py-3 bg-linear-to-r from-[#7c3aed] to-[#06b6d4] text-white font-bold rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center gap-3">
                                <ShoppingCart className="w-5 h-5" />
                                Add to Cart - {formatPrice(product.product_price)}
                            </button>
                            <button className="px-6 py-3 bg-white border-2 border-[#7c3aed] text-[#7c3aed] font-bold rounded-xl hover:bg-[#7c3aed] hover:text-white transition-colors flex items-center gap-2">
                                <Download className="w-5 h-5" />
                                Buy Now
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                                <div className="text-2xl font-bold text-gray-900">4.9</div>
                                <div className="flex justify-center mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">Rating</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                                <div className="text-2xl font-bold text-gray-900">1.2K</div>
                                <div className="text-sm text-gray-500 mt-1">Downloads</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                                <div className="text-2xl font-bold text-gray-900">24</div>
                                <div className="text-sm text-gray-500 mt-1">Reviews</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                {product.product_title}
                            </h1>
                            <div className="flex items-center gap-4 mt-4">
                                <div className="text-3xl font-bold text-gray-900">
                                    {formatPrice(product.product_price)}
                                </div>
                                <div className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full">
                                    One-time purchase
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                            <div className="w-12 h-12 bg-linear-to-r from-[#7c3aed] to-[#06b6d4] rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">
                                    {product.owner_email.split('@')[0]}
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {formatDate(product.create_at)}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Shield className="w-4 h-4" />
                                        Verified Seller
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">Description</h3>
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {product.product_description}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: <Zap className="w-5 h-5" />, text: "PBR Textures", color: "text-blue-600 bg-blue-50" },
                                    { icon: <Package className="w-5 h-5" />, text: "Mid-poly Model", color: "text-purple-600 bg-purple-50" },
                                    { icon: <Globe className="w-5 h-5" />, text: "Game Ready", color: "text-green-600 bg-green-50" },
                                    { icon: <CheckCircle className="w-5 h-5" />, text: "Commercial Use", color: "text-amber-600 bg-amber-50" }
                                ].map((feature, index) => (
                                    <div key={index} className={`${feature.color} p-4 rounded-xl flex items-center gap-3`}>
                                        {feature.icon}
                                        <span className="font-medium">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">File Formats</h3>
                            <div className="flex flex-wrap gap-3">
                                {['FBX', 'OBJ', 'GLTF', 'BLEND', 'MA', 'MAX'].map((format) => (
                                    <span key={format} className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg">
                                        {format}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 pt-6">
                            <button className="flex-1 cursor-pointer py-4 bg-linear-to-r from-[#7c3aed] to-[#06b6d4] text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                                <ShoppingCart className="w-6 h-6" />
                                Add to Cart
                            </button>
                            <button className="px-8 cursor-pointer py-4 bg-white border-2 border-[#7c3aed] text-[#7c3aed] font-bold rounded-xl hover:bg-[#7c3aed] hover:text-white transition-all duration-300 flex items-center gap-3">
                                <Download className="w-6 h-6" />
                                Instant Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;