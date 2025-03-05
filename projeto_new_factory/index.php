<?php

namespace App\Controller\Notificatiob;

use App\Service\Notification\EmailNotification;
use App\Service\Notification\SlackNotification;
use App\Service\Notification\SmsNotification;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class NotificationController extends AbstractController {
    #[Route('/api/send-notification', name: 'send_notification')]
    public function sendNotification(Request $request): Response {
        $notificationType = $request->query->get(key: 'notificationType');
        $recipient = $request->query->get(key:'recipient'); //destinatário dessa mensagem.
        $message = $request->query->get(key:'message'); //mensagem em si.

        if ($notificationType === 'email') {
            $notification = new EmailNotification();
        }

        if ($notificationType === 'sns') {
            $notification = new SmsNotification();
        }

        if ($notificationType === 'slack') {
            $notification = new slackNotification(); 
        }

        $notification->send($message, $recipient);

        return new Response (content:'Notificação enviada com sucesso.');
    }
}

>