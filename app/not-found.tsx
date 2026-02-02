// app/not-found.tsx
import Link from "next/link";
import { Home, ShoppingBag } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mx-auto mb-8">
          <ShoppingBag className="w-16 h-16 text-white" />
        </div>

        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>

        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-pink-500"
          >
            <Link className="flex items-center gap-3" href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/collections">Browse Collections</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
