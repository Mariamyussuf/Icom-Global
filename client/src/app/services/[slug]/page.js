import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import ServiceDetailContent from '@/components/ServiceDetailContent';

const slugRedirects = {
  'telecommunications': 'rf-drive-testing',
  'fiber-optic': 'fiber-optic-transmission',
  'solar-power': 'specialized-infrastructure-solutions',
  'generator-services': 'network-operations-maintenance',
  'electrical-infrastructure': 'civil-works',
  'it-solutions': 'in-building-coverage',
  'procurement': 'specialized-infrastructure-solutions',
  'project-management': 'technical-consulting-project-management'
};

export function generateStaticParams() {
  const params = services.map((service) => ({
    slug: service.slug,
  }));
  // Generate static pages for the old routes so they do not break at build time
  Object.keys(slugRedirects).forEach((oldSlug) => {
    params.push({ slug: oldSlug });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const targetSlug = slugRedirects[slug] || slug;
  const service = services.find((s) => s.slug === targetSlug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} | ICOM Technical Service Support`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const targetSlug = slugRedirects[slug] || slug;
  const service = services.find((s) => s.slug === targetSlug);
  if (!service) notFound();
  return <ServiceDetailContent service={service} />;
}
